import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { StatusComponent } from '../status/status.component';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [StatusComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent implements OnInit {
  users: User[] = [];
  @Input() title: string = '';
  @Input() status: boolean = true;
  @Input() usersList: any[] = [];

  constructor() {}

  ngOnInit(): void {
    // Aquí se cargaran los usuarios desde el servicio o la  API.

    //* simulamos algunos usuarios para comprobacion, una vez que carguemos desde el servicio o API suprimir esta simulacion
    this.users = [
      {
        user_id: 1,
        avatar: './assets/avatar/fortnite-1.jpg',
        name: 'Juan Pérez',
        email: 'juan@gmail.com',
        nationality: 'Español',
        aboutMe: '¡Hola! Soy Juan y me encanta la programación.',
        password: '********',
        confirmPassword: '********',
        status: true, // Usuario activo
        platforms: ['Playstation', 'Nintendo'],
        genres: ['Acción', 'Aventura'],
      },
      {
        user_id: 2,
        avatar: './assets/avatar/gtaV.jpg',
        name: 'María García',
        email: 'maria@hotmail.com',
        nationality: 'Mexicana',
        aboutMe: 'Apasionada por el diseño y la creatividad.',
        password: '********',
        confirmPassword: '********',
        status: false, // Usuario inactivo
        platforms: ['Xbox'],
        genres: ['Coches', 'Estrategia'],
      },
    ];
  }

  // Agregar otras funciones y métodos si fuera necesario en el componente...
}
