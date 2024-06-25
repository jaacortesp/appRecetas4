import { Injectable } from '@angular/core';

interface User {
  nombre: string;
  apellido: string;
  usuario: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private localStorageKey = 'registeredUsers';

  constructor() { }

  // Registrar un nuevo usuario
  registerUser(user: User): void {
    const users = this.getUsersFromStorage();
    users.push(user);
    localStorage.setItem(this.localStorageKey, JSON.stringify(users));
  }

  // Obtener todos los usuarios registrados del localStorage
  private getUsersFromStorage(): User[] {
    const usersJSON = localStorage.getItem(this.localStorageKey);
    return usersJSON ? JSON.parse(usersJSON) : [];
  }

  // Verificar si un usuario está registrado
  loginUser(username: string, password: string): boolean {
    const users = this.getUsersFromStorage();
    return users.some(user => user.usuario === username && user.password === password);
  }
}
