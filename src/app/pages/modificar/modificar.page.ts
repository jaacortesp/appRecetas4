import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioDBService } from '../../services/servicio-db.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {

  nombre: string = '';
  cantidad: number = 0;
  unidad_med: string = '';
  id: number = 0;

  constructor(private router: Router, private activedRouter: ActivatedRoute, private servicio: ServicioDBService) { 
    this.activedRouter.queryParams.subscribe(param => {
      if (this.router.getCurrentNavigation()?.extras?.state) {
        this.id = this.router.getCurrentNavigation()?.extras?.state?.['idEnviado'];
        this.nombre = this.router.getCurrentNavigation()?.extras?.state?.['nombreEnviado'];
        this.cantidad = this.router.getCurrentNavigation()?.extras?.state?.['cantidadEnviada'];
        this.unidad_med = this.router.getCurrentNavigation()?.extras?.state?.['unidad_medEnviada'];
      }
    })
  }
  
  ngOnInit() {
  }

  enviarDatos() {
    this.servicio.modificarIngredientes(this.id, this.nombre, this.cantidad, this.unidad_med);
    this.servicio.presentToast("Ingrediente Actualizado");
    this.router.navigate(['/listar']);
  }

}

