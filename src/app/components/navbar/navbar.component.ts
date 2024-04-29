import { Component, Input, NgModule } from '@angular/core';
import { LinkComponent } from '../link/link.component';
import { User } from '../../models/user';
import { UsersListComponent } from '../users-list/users-list.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { FormLoginNavbarComponent } from '../form-login-navbar/form-login-navbar.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { LinkWithoutPageComponent } from '../link-without-page/link-without-page.component';
import { DropdownsNotificationsComponent } from '../dropdowns-notifications/dropdowns-notifications.component';
import { DropdownsRequestsComponent } from '../dropdowns-requests/dropdowns-requests.component';
import { DropdownsThreadsComponent } from '../dropdowns-threads/dropdowns-threads.component';
import { UserService } from '../../services/user/user.service';
import { Subject } from 'rxjs';
import { FormLoginComponent } from '../form-login/form-login.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  providers: [UserService],
  imports: [
    LinkComponent,
    UsersListComponent,
    CommonModule,
    RouterModule,
    FormLoginNavbarComponent,
    RouterLink,
    AvatarComponent,
    LinkWithoutPageComponent,
    DropdownsNotificationsComponent,
    DropdownsRequestsComponent,
    DropdownsThreadsComponent,
    FormLoginComponent,
  ],
})
export class NavbarComponent {
  @Input() user!: User;
  isLoggedIn = true;
  available_to_play = false;
  isUser = { avalaible_to_play: 'AUSENTE' };
  public avatar: string =
    'https://cdn-icons-png.flaticon.com/512/4792/4792929.png';

  // Crea un Subject para manejar el estado
  private statusSubject = new Subject<boolean>();

  constructor(private userService: UserService) {
    // Obtenemos los users desde localStorage
    let usersFromStorage = localStorage.getItem('user');
    this.user = usersFromStorage ? JSON.parse(usersFromStorage) : [];
    console.log(usersFromStorage);
    console.log(this.user);

    // Aquí recuperamos el avatar:
    const avatarDataString = localStorage.getItem('avatar');
    this.avatar = avatarDataString as string;
    console.log(this.avatar);
  }

  logout() {
    const userId: number = JSON.parse(
      localStorage.getItem('user') as string
    ).user_id;
    if (userId) {
      this.isLoggedIn = false;

      // Cambiar el estado a 'AUSENTE'
      this.available_to_play = false;
      this.isUser.avalaible_to_play = 'AUSENTE';

      // Actualizar el estado en el almacenamiento local
      localStorage.setItem('userStatus', this.isUser.avalaible_to_play);

      // Emitir el nuevo estado a través del Subject
      this.statusSubject.next(this.available_to_play);

      // Llamar al servicio para actualizar el estado en la base de datos
      const userId = this.user.user_id.toString();
      this.userService
        .updateUserAvailability(userId, this.available_to_play)
        .subscribe(
          () => console.log('Estado actualizado correctamente al hacer logout'),
          (error) => {
            console.error(
              'Error al actualizar el estado al hacer logout:',
              error
            );
            // Emitir el error a través del Subject
            this.statusSubject.error(error);
          }
        );
    }
  }
}
