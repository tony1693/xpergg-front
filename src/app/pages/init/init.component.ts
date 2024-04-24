import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StatusComponent } from '../../components/status/status.component';
import { User } from '../../models/user';
import { VideoPostComponent } from '../../components/video-post/video-post.component';
import { UsersListComponent } from '../../components/users-list/users-list.component';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-init',
  standalone: true,
  imports: [RouterLink, StatusComponent, VideoPostComponent, UsersListComponent],
  templateUrl: './init.component.html',
  styleUrl: './init.component.css',
  providers:[UserService]
})
export class InitComponent {

  onlineFriends: any [] = [];
  sugerenciaFriends: any [] = [];

  @Input() public apiNewsText: string = 'Ubisoft habría retrasado el Assassins creed ambientado en China';
  @Input() public linkApiNewsRouting: string = "";

  users: User[] = [];

  public addPost(inputTextPost: HTMLInputElement, inputLinkVideoPost: HTMLInputElement) {
    console.log(inputTextPost.value);
    console.log(inputLinkVideoPost.value);
  }

  constructor() {
    this.onlineFriends = [
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
        available_to_play: false, // Usuario inactivo
        platforms: ['Xbox'],
        genres: ['Coches', 'Estrategia']
      }


    ]

    this.sugerenciaFriends = [
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
      }
    ]
  }

  ngOnInit(): void {
    // Aquí se cargarían los usuarios desde el servicio.


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
        available_to_play: true, // Usuario activo
        platform: ['Playstation', 'Nintendo'],
        interest: ['Acción', 'Aventura']
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
        interest: ['Coches', 'Estrategia']
      }

    ];
  }

}
