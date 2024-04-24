import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StatusComponent } from '../../components/status/status.component';
import { User } from '../../models/user';
import { VideoPostComponent } from '../../components/video-post/video-post.component';
import { UsersListComponent } from '../../components/users-list/users-list.component';
import { PostService } from '../../services/post/post.service';
import { Post } from '../../models/posts';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../services/user/user.service';
import { Thread } from '../../models/thread';

@Component({
  selector: 'app-init',
  standalone: true,
  imports: [
    RouterLink,
    StatusComponent,
    VideoPostComponent,
    UsersListComponent,
    HttpClientModule,
  ],
  templateUrl: './init.component.html',
  styleUrl: './init.component.css',
  providers: [PostService, UserService],
})
export class InitComponent {
  onlineFriends: any[] = [];
  sugerenciaFriends: any[] = [];

  @Input() public apiNewsText: string =
    'Ubisoft habría retrasado el Assassins creed ambientado en China';
  @Input() public linkApiNewsRouting: string = '';
  @Input() public avatarImg: string = 'assets/avatar/call-duty.webp'; // esto me tiene que venir de localStorage

  users: User[] = [];

  constructor(private readonly postService: PostService) {}

  public addPost(
    inputTextPost: HTMLInputElement,
    inputLinkVideoPost: HTMLInputElement
  ) {
    const currentDate = new Date().toISOString();
    let newPost: Post = {
      url: inputLinkVideoPost.value,
      description: inputTextPost.value,
      date: currentDate,
      user_id: 1, // aqui me tiene que venir de local storage
      post_id: 0,
    };
    localStorage.setItem('fecha creacion post', currentDate);
    this.postService.addPost(newPost).subscribe(
      (data) => {
        console.log(data);
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // constructor() {
  // this.onlineFriends = [
  // {
  // user_id: 1,
  // avatar: './assets/avatar/fortnite-1.jpg',
  // name: 'Juan Pérez',
  // email: 'juan@gmail.com',
  // nationality: 'Español',
  // aboutMe: '¡Hola! Soy Juan y me encanta la programación.',
  // password: '********',
  // confirmPassword: '********',
  // status: true, // Usuario activo
  // platforms: ['Playstation', 'Nintendo'],
  // genres: ['Acción', 'Aventura'],
  // },
  // {
  // user_id: 2,
  // avatar: './assets/avatar/gtaV.jpg',
  // name: 'María García',
  // email: 'maria@hotmail.com',
  // nationality: 'Mexicana',
  // aboutMe: 'Apasionada por el diseño y la creatividad.',
  // password: '********',
  // confirmPassword: '********',
  // status: false, // Usuario inactivo
  // platforms: ['Xbox'],
  // genres: ['Coches', 'Estrategia'],
  // },
  // ];
  //
  // this.sugerenciaFriends = [
  // {
  // user_id: 1,
  // avatar: './assets/avatar/fortnite-1.jpg',
  // name: 'Juan Pérez',
  // email: 'juan@gmail.com',
  // nationality: 'Español',
  // aboutMe: '¡Hola! Soy Juan y me encanta la programación.',
  // password: '********',
  // confirmPassword: '********',
  // status: true, // Usuario activo
  // platforms: ['Playstation', 'Nintendo'],
  // genres: ['Acción', 'Aventura'],
  // },
  // ];
  // }
  //
  // ngOnInit(): void {
  // Aquí se cargarían los usuarios desde el servicio.
  //
  // * simulamos algunos usuarios para comprobacion, una vez que carguemos desde el servicio o API suprimir esta simulacion
  // this.users = [
  // {
  // user_id: 1,
  // avatar: './assets/avatar/fortnite-1.jpg',
  // name: 'Juan Pérez',
  // email: 'juan@gmail.com',
  // nationality: 'Español',
  // aboutMe: '¡Hola! Soy Juan y me encanta la programación.',
  // password: '********',
  // confirmPassword: '********',
  // status: true, // Usuario activo
  // platforms: ['Playstation', 'Nintendo'],
  // genres: ['Acción', 'Aventura'],
  // },
  // {
  // user_id: 2,
  // avatar: './assets/avatar/gtaV.jpg',
  // name: 'María García',
  // email: 'maria@hotmail.com',
  // nationality: 'Mexicana',
  // aboutMe: 'Apasionada por el diseño y la creatividad.',
  // password: '********',
  // confirmPassword: '********',
  // status: false, // Usuario inactivo
  // platforms: ['Xbox'],
  // genres: ['Coches', 'Estrategia'],
  // },
  // ];
  // }
}
