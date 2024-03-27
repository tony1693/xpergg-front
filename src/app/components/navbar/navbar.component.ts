import { Component } from '@angular/core';
import { LinkComponent } from '../link/link.component';
import { User } from '../../models/user';
import { UsersListComponent } from '../users-list/users-list.component';
import { FormLoginComponent } from '../form-login/form-login.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LinkComponent, UsersListComponent, FormLoginComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  public user: User | null = null;
}
