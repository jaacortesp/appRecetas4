import { Component, OnInit } from '@angular/core';
import { ServicioDBService } from '../../services/servicio-db.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  arregloIngredientes: any = [
    {
      id: '',
      nombre: '',
      cantidad: 0,
      unidad_med: ''
    }
    
  ]

  constructor(private servicioBD: ServicioDBService, private router: Router) { }

  ngOnInit() {
    this.servicioBD.dbState().subscribe(res => {
      if (res) {
        this.servicioBD.fetchIngredientes().subscribe(item => {
          this.arregloIngredientes = item;
        })
      }
    })
  }

  modificar(x: any) {
    let navigationExtras: NavigationExtras = {
      state: {
        idEnviado: x.id,
        nombreEnviado: x.nombre,
        cantidadEnviada: x.cantidad,
        unidad_medEnviada: x.unidad_med
      }
    }
    this.router.navigate(['/modificar'], navigationExtras);
  }

  eliminar(x: any) {
    this.servicioBD.eliminarIngredientes(x.id);
    this.servicioBD.presentToast("Ingrediente Eliminado");
  }

}
