import { Component, Input, input } from '@angular/core';
import { User } from '../../models/user';
import { PostService } from '../../services/post/post.service';
import { HttpClientModule } from '@angular/common/http';
import { Post } from '../../models/posts';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-video-post',
  standalone: true,
  imports: [HttpClientModule, YouTubePlayerModule],
  templateUrl: './video-post.component.html',
  styleUrl: './video-post.component.css',
  providers: [PostService],
})
export class VideoPostComponent {
  @Input() public linkYoutubePost!: string;
  @Input() public titlePost: string =
    'El estudio de Nightingale cambia sus prioridades por el tibio recibimiento tras el lanzamiento';
  @Input() public urlId: string = '';
  users: User[] = [];

  // Inicializa el contador de likes
  likesCount: number = 0;
  posts: Post[] = [];

  constructor(private readonly postService: PostService) {}

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe((data: Post[]) => {
      console.log(data);
      this.posts = data;
    });
  }
  public obtainIdURL(url: string): string {
    const videoId = url.split('v=')[1];
    return videoId;
  }

  // Aquí se cargarían los usuarios desde el servicio.
  //* simulamos algunos usuarios para comprobacion, una vez que carguemos desde el servicio o API suprimir esta simulacion
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
  // available_to_play: true, // Usuario activo
  // platform: ['Playstation', 'Nintendo'],
  // interest: ['Acción', 'Aventura'],
  // },
  // ];

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
