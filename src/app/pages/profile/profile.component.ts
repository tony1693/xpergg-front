import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StatusComponent } from '../../components/status/status.component';
import { VideoPostComponent } from '../../components/video-post/video-post.component';
import { UsersListComponent } from '../../components/users-list/users-list.component';
import { User } from '../../models/user';
import { PostService } from '../../services/post/post.service';
import { UserService } from '../../services/user/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink, StatusComponent, VideoPostComponent, UsersListComponent, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  @Input() user!: User;
  isLoggedIn = true;
 
  isUser = { available_to_play: 'AUSENTE' };
  public userAvatar: string = '';

  recentPrivateChats: any[] = [];
  onlineFriends: User[] = [];
  sugerenciaFriends: User[] = [];

  user_id!: number; // Asegúrate de tener el ID del usuario
  userPostCount!: number;
  available_to_play = false;

  constructor(private readonly postService: PostService, private readonly userService: UserService) {
    // Obtenemos el user desde localStorage
    let usersFromStorage = localStorage.getItem('user');
    this.user = usersFromStorage ? JSON.parse(usersFromStorage) : [];
    this.user_id = this.user.user_id; // Inicializamos user_id aquí

    console.log(usersFromStorage);
    console.log(this.user);

    // Aquí recuperamos el estado del usuario desde el almacenamiento local
    let userStatusFromStorage = localStorage.getItem('userStatus');
    this.available_to_play = userStatusFromStorage === 'DISPONIBLE' ? true : false;
    console.log(userStatusFromStorage);
  }

  // Función para cambiar el estado de disponibilidad
  toggleAvailability() {
    this.available_to_play = !this.available_to_play;
    let status = this.available_to_play ? 'DISPONIBLE' : 'AUSENTE';
    localStorage.setItem('userStatus', status);
    let user = JSON.parse(localStorage.getItem('user') as string);
    this.updateDatabase(user.user_id, this.available_to_play)
  }
  // Llamar al servicio para actualizar el estado en la base de datos
  public updateDatabase(userId: string, isAvailable: boolean) {
    this.userService.updateUserAvailability(userId, isAvailable).subscribe({
      next: (data) => {
        console.log('Actualización exitosa', data);
      },
      error: (error) => {
        console.log('Ocurrió un error durante la actualización', error);
      }
    });
  }

  ngOnInit():void {
    this.getUserPostCount()
  
      // Obtén el objeto de usuario del localStorage
      let user = JSON.parse(localStorage.getItem('user') ?? '{}');
      this.user_id = user.user_id; // Inicializamos user_id aquí también por si acaso
    
      // Aquí recuperamos el estado del usuario desde el almacenamiento local
      let userStatusFromStorage = localStorage.getItem('userStatus');
      this.available_to_play = userStatusFromStorage === 'DISPONIBLE' ? true : false;
      console.log(userStatusFromStorage);
    
    }


 
  
    getUserPostCount(): void {
      const userId = 1;  // ID del usuario logeado
      this.postService.getUserPostCount(userId).subscribe((response: { post_count: number; }) => {
        this.userPostCount = response.post_count;
      }, (error: any) => {
        console.log('Error getting post count from user', error);
      });
    }
  }
