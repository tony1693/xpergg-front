import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { StatusComponent } from '../status/status.component';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-list-chat',
  standalone: true,
  imports: [CommonModule, StatusComponent],
  templateUrl: './user-list-chat.component.html',
  styleUrl: './user-list-chat.component.css',
})
export class UserListChatComponent implements OnInit {
  usersChat: User[] = [];
  @Input() title: string = '';
  @Input() available_to_play: boolean = true;
  @Input() usersList: any[] = [];

  constructor() {}

  ngOnInit(): void {
    // Aquí se cargaran los usuarios desde el servicio o la  API.

    //* simulamos algunos usuarios para comprobacion, una vez que carguemos desde el servicio o API suprimir esta simulacion
    this.usersChat = [
      {
        user_id: 1,
        avatar: './assets/avatar/fortnite-1.jpg',
        name: 'Juan Pérez',
        email: 'juan@gmail.com',
        nationality: 'Español',
        aboutMe: '¡Hola! Soy Juan y me encanta la programación.',
        password: '********',
        confirmPassword: '********',
        available_to_play: true, // Usuario activo
        platform: ['Playstation', 'Nintendo'],
        interest: ['Acción', 'Aventura'],
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
        available_to_play: false, // Usuario inactivo
        platform: ['Xbox'],
        interest: ['Coches', 'Estrategia'],
      },
      {
        user_id: 3,
        avatar: 'assets/avatar/call_of_duty-2.jpg',
        name: 'Judit',
        email: 'jbr@gmail.com',
        nationality: 'Spanish',
        aboutMe: 'test test test',
        password: 'Test123',
        confirmPassword: 'Test123',
        available_to_play: true,
        platform: ['PS4, PC'],
        interest: ['Sports, action'],
      },
    ];
  }
}
