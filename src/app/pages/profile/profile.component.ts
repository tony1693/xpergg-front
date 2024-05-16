import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StatusComponent } from '../../components/status/status.component';
import { VideoPostComponent } from '../../components/video-post/video-post.component';
import { UsersListComponent } from '../../components/users-list/users-list.component';
import { User, userPosts } from '../../models/user';
import { PostService } from '../../services/post/post.service';
import { UserService } from '../../services/user/user.service';
import { CommonModule } from '@angular/common';
import { Post } from '../../models/posts';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    RouterLink,
    StatusComponent,
    VideoPostComponent,
    UsersListComponent,
    CommonModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  providers: [PostService, UserService],
})
export class ProfileComponent {
  @Input() user!: User;
  @Input() platform!: string [];
  isLoggedIn = true;

  isUser = { available_to_play: 'AUSENTE' };
  public userAvatar: string = '';
  posts: Post[] = [];
  public userName: string = '';
  public avatar: string = '';
  recentPrivateChats: any[] = [];
  onlineFriends: User[] = [];
  sugerenciaFriends: User[] = [];

  user_id!: number; // Asegúrate de tener el ID del usuario
  userPostCount!: number;
  available_to_play = false;
  isLast: any;
  // platform: string[] = []; 

  // public platform = ['ps', 'xbox', 'nintendo', 'pc'];
  // // Claves exclusivas para géneros
  // public interest = [
  //   'arcade',
  //   'disparos',
  //   'peleas',
  //   'aventuras',
  //   'accion',
  //   'puzzle',
  //   'preguntas',
  //   'deportes',
  //   'coches',
  //   'rol',
  //   'estrategia',
  //   'realidadVirtual',
  // ];

  constructor(
    private readonly postService: PostService,
    private readonly userService: UserService,
    private cdRef: ChangeDetectorRef
  ) {
    // Obtenemos el user desde localStorage
    let usersFromStorage = localStorage.getItem('user');
    this.user = usersFromStorage ? JSON.parse(usersFromStorage) : [];
    this.user_id = this.user.user_id; // Inicializamos user_id aquí

    console.log(usersFromStorage);
    console.log(this.user);

    // Aquí recuperamos el estado del usuario desde el almacenamiento local
    let userStatusFromStorage = localStorage.getItem('userStatus');
    this.available_to_play =
      userStatusFromStorage === 'DISPONIBLE' ? true : false;
    console.log(userStatusFromStorage);

    // Aquí recuperamos el avatar:
    const avatarDataString = localStorage.getItem('avatar');
    this.userAvatar = avatarDataString as string;
    console.log(this.userAvatar);

    // Aqui recogemos el nombre de usuario:
    const userDataString = localStorage.getItem('user');
    const userData = userDataString ? JSON.parse(userDataString) : null;
    const userName = userData ? userData.name : '';
    localStorage.setItem('name', userName);
    console.log(userName);

    //Recogemos Platform de LocalStorage
    const userPlatform = localStorage.getItem('user');
    const userDataPlatform = userPlatform ? JSON.parse(userPlatform) : null;
    const userPlatformName = userDataPlatform ? userDataPlatform.platform : '';
    localStorage.setItem('platform', userPlatformName);
    console.log(userPlatformName);

    //Recogemos Platform de LocalStorage
    const userInterest = localStorage.getItem('user');
    const userDataInterest = userInterest ? JSON.parse(userInterest) : null;
    const userInterestName = userDataInterest ? userDataInterest.Interest : '';
    localStorage.setItem('Interest', userInterestName);
    console.log(userInterestName);
  }



  ngOnInit(): void {
    this.getUserPostCount();

    // Obtén el objeto de usuario del localStorage
    let user = JSON.parse(localStorage.getItem('user') ?? '{}');
    this.user_id = user.user_id; // Inicializamos user_id aquí también por si acaso

    // Aquí recuperamos el estado del usuario desde el almacenamiento local
    let userStatusFromStorage = localStorage.getItem('userStatus');
    this.available_to_play =
      userStatusFromStorage === 'DISPONIBLE' ? true : false;
    console.log(userStatusFromStorage);
    const userId: number = JSON.parse(
      localStorage.getItem('user') as string
    ).user_id;
    if (userId) {
      this.postService.getPostsByUser(userId).subscribe({
        next: (posts) => {
          this.posts = posts;
          console.log('Estos son los posts del usuario');
          
        },
        error: (error) => {
          console.log(error);
        },
      });
    } else {
      console.log('No existe ese usuario');
    }
  }

  //Funcion para mostrar plataformas y generos
  public getInterest(){
    let interest = JSON.parse(localStorage.getItem('platform') ?? '{}');

  }

  // Función para cambiar el estado de disponibilidad

  ngAfterViewChecked() {
    // Forzar la detección de cambios
    this.cdRef.detectChanges();
  }

  toggleAvailability() {
    this.available_to_play = !this.available_to_play;
    let status = this.available_to_play ? 'DISPONIBLE' : 'AUSENTE';
    localStorage.setItem('userStatus', status);
    let user = JSON.parse(localStorage.getItem('user') as string);
    this.updateDatabase(user.user_id, this.available_to_play);
  }

  // Llamar al servicio para actualizar el estado en la base de datos
  public updateDatabase(userId: string, isAvailable: boolean) {
    this.userService.updateUserAvailability(userId, isAvailable).subscribe({
      next: (data) => {
        console.log('Actualización exitosa', data);
      },
      error: (error) => {
        console.log('Ocurrió un error durante la actualización', error);
      },
    });
  }

  // ngOnInit(): void {
  //   this.getUserPostCount()

  //   // Obtén el objeto de usuario del localStorage
  //   let user = JSON.parse(localStorage.getItem('user') ?? '{}');
  //   this.user_id = user.user_id; // Inicializamos user_id aquí también por si acaso

  //   // Aquí recuperamos el estado del usuario desde el almacenamiento local
  //   let userStatusFromStorage = localStorage.getItem('userStatus');
  //   this.available_to_play = userStatusFromStorage === 'DISPONIBLE' ? true : false;
  //   console.log(userStatusFromStorage);

  // }

  getUserPostCount(): void {
    const userId: number = JSON.parse(
      localStorage.getItem('user') as string
    ).user_id;
    this.postService.getUserPostCount(userId).subscribe({
      next: (response: { post_count: number }) => {
        this.userPostCount = response.post_count;
      },
      error: (error) => {
        console.log('Error getting post count from user', error);
      },
    });
  }
}
