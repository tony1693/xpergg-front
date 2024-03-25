import { Component } from '@angular/core';
import { LinkComponent } from '../link/link.component';
import { User } from '../../models/user';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LinkComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public user: User | null = {
    user_id: 1,
    avatar: "assets/avatar/call_of_duty-2.jpg",
    name: "Judit",
    email: "jbr@gmail.com",
    nationality: "Spanish",
    aboutMe: "test test test",
    password: "Test123",
    confirmPassword: "Test123",
    status: true,
    platforms: ["PS4, PC"],
    genres: ["Sports, action"]
  }
  
}
