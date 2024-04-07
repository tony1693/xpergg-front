import { Component } from '@angular/core';
import { UsersListComponent } from '../../components/users-list/users-list.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [UsersListComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent {}
