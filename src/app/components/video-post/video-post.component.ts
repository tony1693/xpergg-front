import { Component } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-video-post',
  standalone: true,
  imports: [],
  templateUrl: './video-post.component.html',
  styleUrl: './video-post.component.css'
})
export class VideoPostComponent {
  users: User[] = [];

  constructor() { }

  ngOnInit(): void {
    // Aquí se cargaran los usuarios desde el servicio.


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
        genres: ['Acción', 'Aventura']
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
        genres: ['Coches', 'Estrategia']
      }

    ];
  }

  public addComment(inputComment: HTMLInputElement) {
    console.log(inputComment.value)
  }

}
