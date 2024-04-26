import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StatusComponent } from '../../components/status/status.component';
import { User } from '../../models/user';
import { VideoPostComponent } from '../../components/video-post/video-post.component';
import { UsersListComponent } from '../../components/users-list/users-list.component';
import { PostService } from '../../services/post/post.service';
import { Post } from '../../models/posts';
import { UserService } from '../../services/user/user.service';
import { FormLoginComponent } from '../../components/form-login/form-login.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-init',
  standalone: true,
  imports: [
    RouterLink,
    StatusComponent,
    VideoPostComponent,
    UsersListComponent,
    FormLoginComponent,
    CommonModule,
  ],
  templateUrl: './init.component.html',
  styleUrl: './init.component.css',
  providers: [PostService, UserService],
})
export class InitComponent {
  users: User[] = [];

  onlineFriends: User[] = [];
  sugerenciaFriends: User[] = [];
  available_to_play: boolean = false;
  public userName: string = '';
  public userAvatar: string = '';
  public linkYoutubePost!: string;
  public titlePost: string =
    'El estudio de Nightingale cambia sus prioridades por el tibio recibimiento tras el lanzamiento';
  public urlId: string = '';
  public post: Post[] = [];

  @Input() user!: User;
  @Input() public apiNewsText: string =
    'Ubisoft habría retrasado el Assassins creed ambientado en China';
  @Input() public linkApiNewsRouting: string = '';
  @Input() public avalaible_to_play: boolean = false;
  @Input() public avatarImg: string = 'assets/avatar/call-duty.webp'; // esto me tiene que venir de localStorage

  constructor(
    private readonly postService: PostService,
    private readonly userService: UserService
  ) {
    // Obtenemos los users desde localStorage
    let usersFromStorage = localStorage.getItem('user');
    this.users = usersFromStorage ? JSON.parse(usersFromStorage) : [];
    console.log(usersFromStorage);
    console.log(this.users);

    // Aquí recuperamos el estado del usuario desde el almacenamiento local
    let userStatusFromStorage = localStorage.getItem('userStatus');
    this.available_to_play =
      userStatusFromStorage === 'DISPONIBLE' ? true : false;
    console.log(userStatusFromStorage);

    // Aquí recuperamos el userName:
    const userDataString = localStorage.getItem('user');
    const userData = userDataString ? JSON.parse(userDataString) : null;
    const userName = userData ? userData.name : '';
    localStorage.setItem('name', userName);
    console.log(userName);

    // Aquí recuperamos el avatar:
    const avatarDataString = localStorage.getItem('user');
    const avatarString = avatarDataString ? JSON.parse(avatarDataString) : null;
    const userAvatar = avatarString ? avatarString.imgavatar : '';
    localStorage.setItem('avatar', userAvatar);
    console.log(userAvatar);
  }
  // Función para cambiar el estado de disponibilidad
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

  public addPost(
    inputTextPost: HTMLInputElement,
    inputLinkVideoPost: HTMLInputElement
  ) {
    const currentDate = new Date().toISOString();
    const userId: number = JSON.parse(
      localStorage.getItem('user') as string
    ).user_id;
    const userName = localStorage.getItem('name');
    const avatar = localStorage.getItem('avatar');
    let newPost: Post = {
      url: inputLinkVideoPost.value,
      description: inputTextPost.value,
      date: currentDate,
      user_id: userId,
      post_id: 0,
      user_name: userName,
      user_avatar: avatar,
    };
    localStorage.setItem('fecha creacion post', currentDate);
    this.postService.addPost(newPost).subscribe({
      next: (data) => {
        console.log(data);
        window.location.reload();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  // Aquí para traer name y avatar:

  ngOnInit(): void {
    // const userNameFromLocalStorage = localStorage.getItem('name');
    // this.userName = userNameFromLocalStorage || '';
    const avatarFromLocalStorage = localStorage.getItem('avatar');
    this.userAvatar = avatarFromLocalStorage || '';
    this.postService.getAllPosts().subscribe({
      next: (data: Post[]) => {
        console.log(data);
        this.post = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  // getUserFromLocalStorage(): User | null {
  //   const userJson = localStorage.getItem('user');
  //   return userJson ? JSON.parse(userJson) : null;
  // }
}

// Filtramos los amigos en línea y sugeridos de la lista de users
// this.onlineFriends = this.user.filter(user => user.available_to_play);

// // Asumimos que el user actual es el primero en la lista
// let currentUser = this.user[0];

// this.sugerenciaFriends = this.user.filter(user => {
//   let genreMatches = user.genres.filter(genre => currentUser.genres.includes(genre)).length >= 1;
//   let platformMatches = user.platforms.filter(platform => currentUser.platforms.includes(platform)).length >= 1;
//   return genreMatches && platformMatches;
// });
