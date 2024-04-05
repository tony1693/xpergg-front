import { Component, NgModule } from '@angular/core';
import { LinkComponent } from '../link/link.component';
import { User } from '../../models/user';
import { UsersListComponent } from '../users-list/users-list.component';
import { FormLoginComponent } from '../form-login/form-login.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormLoginNavbarComponent } from '../form-login-navbar/form-login-navbar.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    LinkComponent,
    UsersListComponent,
    FormLoginComponent,
    CommonModule,
    RouterModule,
    FormLoginNavbarComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  public user: User | null = {
    user_id: 1,
    avatar: 'assets/avatar/call_of_duty-2.jpg',
    name: 'Judit',
    email: 'jbr@gmail.com',
    nationality: 'Spanish',
    aboutMe: 'test test test',
    password: 'Test123',
    confirmPassword: 'Test123',
    status: true,
    platforms: ['PS4, PC'],
    genres: ['Sports, action'],
  };
}
