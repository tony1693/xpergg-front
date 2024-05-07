import { Component } from '@angular/core';
import { UserListChatComponent } from '../../components/user-list-chat/user-list-chat.component';
import { RouterLink } from '@angular/router';
import { ThreadsComponent } from '../threads/threads.component';
import { CommunityComponent } from '../community/community.component';
import { ChatService } from '../../services/chat/chat.service';
import { CommonModule } from '@angular/common';
import { ChatMessage } from '../../models/chatMessage';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { ThreadsService } from '../../services/threads/threads.service';
import { CardThreadsComponent } from "../../components/card-threads/card-threads.component";

@Component({
    selector: 'app-chat',
    standalone: true,
    templateUrl: './chat.component.html',
    styleUrl: './chat.component.css',
    providers: [ChatService, UserService,ThreadsService],
    imports: [UserListChatComponent, RouterLink, ThreadsComponent, CommunityComponent, CommonModule, FormsModule, CardThreadsComponent, ThreadsComponent]
})
export class ChatComponent {
  messages: ChatMessage[] = [];
  messageText!: string;
thread: any;


  constructor(private chatService: ChatService, private userService: UserService) { }

  ngOnInit() {
    this.getMessages();
  
  }
  
  getMessages() {
    this.chatService.getMessages().subscribe((messages: ChatMessage[]) => {
      this.messages = messages;
    });
  }
  sendMessage() {
    const message = new ChatMessage(1, new Date(),1, this.messageText, 1); // reemplazar los valores estáticos con los valores reales
    this.chatService.postMessage(message).subscribe(response => {
      console.log(response);
      this.getMessages(); // Actualiza los mensajes después de enviar uno nuevo
    });
  }
}