import { Component } from '@angular/core';
import { UserListChatComponent } from '../../components/user-list-chat/user-list-chat.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [UserListChatComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent {}
