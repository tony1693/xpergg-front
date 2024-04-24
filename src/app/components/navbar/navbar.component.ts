import { Component, NgModule } from '@angular/core';
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

@Component({
  selector: 'app-navbar',
  standalone: true,
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
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  public user: User | null = {
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
  };

  logOut() {
    console.log('Cerrando sesión');
  }
}
