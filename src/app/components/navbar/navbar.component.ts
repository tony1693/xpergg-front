import { Component, NgModule } from '@angular/core';
import { LinkComponent } from '../link/link.component';
import { User } from '../../models/user';
import { UsersListComponent } from '../users-list/users-list.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { FormLoginNavbarComponent } from '../form-login-navbar/form-login-navbar.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { LinkWithoutPageComponent } from '../link-without-page/link-without-page.component';

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
    status: true, // Usuario activo
    platforms: ['Playstation', 'Nintendo'],
    genres: ['Acción', 'Aventura'],
  };

  logOut() {
    console.log('Cerrando sesión');
  }
}
