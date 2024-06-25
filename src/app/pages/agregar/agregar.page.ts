import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ServicioDBService } from '../../services/servicio-db.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  nombre: string = "";
  cantidad: number = 0;
  unidad_med: string = "";
  constructor(private db: ServicioDBService,private toastController: ToastController, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  enviarDatos() {
    this.db.insertarIngredientes(this.nombre, this.cantidad, this.unidad_med);
    this.db.presentToast("Ingrediente Agregado");
    this.router.navigate(['/listar']);
  }

  async presentAlert(msj: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: msj,
      buttons: ['OK'],

    });

    await alert.present();
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', msj:string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

}

