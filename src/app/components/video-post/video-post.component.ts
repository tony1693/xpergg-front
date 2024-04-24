import { Component, Input, input } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-video-post',
  standalone: true,
  imports: [],
  templateUrl: './video-post.component.html',
  styleUrl: './video-post.component.css',
})
export class VideoPostComponent {
  @Input() public linkYoutubePost!: string;
  @Input() public titlePost: string =
    'El estudio de Nightingale cambia sus prioridades por el tibio recibimiento tras el lanzamiento';

  users: User[] = [];

  // Inicializa el contador de likes
  likesCount: number = 0;

  constructor() { }
  public getUserFromLocalStorage(): User | null {
    const userJson = localStorage.getItem('user');
    return userJson ? JSON.parse(userJson) : null;
  }
  ngOnInit(): void {
    
    //* simulamos algunos usuarios para comprobacion, una vez que carguemos desde el servicio o API suprimir esta simulacion
    // this.users = [
    //   {
    //     user_id: 1,
    //     avatar: './assets/avatar/fortnite-1.jpg',
    //     name: 'Juan Pérez',
    //     email: 'juan@gmail.com',
    //     nationality: 'Español',
    //     aboutMe: '¡Hola! Soy Juan y me encanta la programación.',
    //     password: '********',
    //     confirmPassword: '********',
    //     available_to_play: true, // Usuario activo
    //     platforms: ['Playstation', 'Nintendo'],
    //     genres: ['Acción', 'Aventura']
    //   },
    //   {
    //     user_id: 2,
    //     avatar: './assets/avatar/gtaV.jpg',
    //     name: 'María García',
    //     email: 'maria@hotmail.com',
    //     nationality: 'Mexicana',
    //     aboutMe: 'Apasionada por el diseño y la creatividad.',
    //     password: '********',
    //     confirmPassword: '********',
    //     available_to_play: false, // Usuario inactivo
    //     platforms: ['Xbox'],
    //     genres: ['Coches', 'Estrategia']
    //   }

    // ];
  }

  @Input() public likeOff: string =
    '../../../assets/icon/icono-corazon-off.svg';

  addLike(): void {
    // this.likesCount++;
    if (this.likeOff == '../../../assets/icon/icono-corazon-off.svg') {
      this.likesCount++;
      this.likeOff = '../../../assets/icon/icono-corazon-on.svg';
    } else {
      this.likeOff = '../../../assets/icon/icono-corazon-off.svg';
      this.likesCount--;
    }
  }

  public addComment(inputComment: HTMLInputElement) {
    console.log(inputComment.value);
  }
}
