import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Ingredientes } from './ingredientes';

@Injectable({
  providedIn: 'root'
})
export class ServicioDBService {

  // Variable para manipular la conexión a la base de datos
  public database!: SQLiteObject;
  // Variable para la sentencia de creación de tabla
  tablaIngrediente: string = "CREATE TABLE IF NOT EXISTS ingrediente(id_ingrediente INTEGER PRIMARY KEY autoincrement, nombre VARCHAR(20) NOT NULL, cantidad NUMBER NOT NULL, unidad_med VARCHAR(10) NOT NULL);";
  // Variable para la sentencia de registros por defecto en la tabla
  registroIngrediente: string = "INSERT or IGNORE INTO ingrediente(id_ingrediente, nombre, cantidad, unidad_med) VALUES (1, 'Harina', 2, 'taza');";
  // Observable para manipular todos los registros de la tabla ingrediente
  listaIngredientes = new BehaviorSubject([]);
  // Observable para manipular si la BD está lista o no para su manipulación
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqlite: SQLite, private platform: Platform, private toastController: ToastController, private alertController: AlertController) { 
    this.crearBD();
  }
  async presentToast(msj: string){
    const toast = await this.toastController.create({
      message: msj,
      duration: 3000,
      icon: 'globe'
    });

    await toast.present();
  }

  async presetAlert(msj: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
    
  }

  crearBD() {
    // Verificamos que la plataforma esté lista
    this.platform.ready().then(() => {
      // Creadmos la BD
      this.sqlite.create({
        name: 'bdingredientes.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        // Guardamos la conexión a la BD en la variable propia
        this.database = db;
        // Llamar a la función para crear las tablas
        this.crearTablas();
      }).catch(e => {
        // Mostramos el mensaje de error en caso de ocurrir alguno
        this.presentToast("Error BD:" + e);
      })
    })
  }

  async crearTablas() {
    try {
      // Ejecutamos las tablas
      await this.database.executeSql(this.tablaIngrediente, []);
      // Ejecutamos los registros
      await this.database.executeSql(this.registroIngrediente, []);
      // Cargar todos los registros de la tabla en el observable
      this.buscarIngredientes();
      // Actualizar el status de la BD
      this.isDBReady.next(true);
    } catch(e) {
      this.presentToast("Error Tablas: " + e);
    }
  }

  buscarIngredientes() {
    // Retorno de la ejecución del select
    return this.database.executeSql('SELECT * FROM ingrediente', []).then(res => {
      // Crear lista de objetos de ingredientes vacío
      let items: Ingredientes[] = [];
      // si se cuentan más de 0 filas en el resultSet entonces se agregan los registros al arreglo items
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id: res.rows.item(i).id_ingrediente,
            nombre: res.rows.item(i).nombre,
            cantidad: res.rows.item(i).cantidad,
            unidad_med: res.rows.item(i).unidad_med
          })
        }
      }
      // Actualizar el observable de los ingredientes
      this.listaIngredientes.next(items as any);
    })
  }

  dbState() {
    return this.isDBReady.asObservable();
  }

  fetchIngredientes(): Observable<Ingredientes[]> {
    return this.listaIngredientes.asObservable();
  }

  insertarIngredientes(nombre: any, cantidad: any, unidad_med: any) {
    let data = [nombre, cantidad, unidad_med];
    return this.database.executeSql('INSERT INTO ingrediente(nombre, cantidad, unidad_med) VALUES (?,?,?)', data).then(res => {
      this.buscarIngredientes();
    });
  }

  modificarIngredientes(id: any, nombre: any, cantidad: any, unidad_med: any){
    let data = [nombre, cantidad, unidad_med, id];
    return this.database.executeSql('UPDATE ingrediente SET nombre = ?, cantidad = ?, unidad_med = ? WHERE id_ingrediente = ?',data).then(data2=>{
      this.buscarIngredientes();
    });
  }

  eliminarIngredientes(id: any) {
    return this.database.executeSql('DELETE FROM ingrediente WHERE id_ingrediente = ?',[id]).then(a =>{
      this.buscarIngredientes();
    });
  }

}
