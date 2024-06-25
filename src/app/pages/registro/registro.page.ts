import { Component } from '@angular/core';
import { AuthService } from '../../services/serv-autoriz.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  
  nombre: string = '';
  apellido: string = '';
  usuario: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  registrar() {
    const user = { nombre: this.nombre, apellido: this.apellido, usuario: this.usuario, password: this.password };
    this.authService.registerUser(user);
    alert('Usuario registrado exitosamente');
  }
  limpiar() {
    this.nombre = '';
    this.apellido  = '';
    this.usuario = '';
    this.password = '';
  }
}

