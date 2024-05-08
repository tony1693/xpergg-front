import { Component, Input } from '@angular/core';
import { UserListChatComponent } from '../../components/user-list-chat/user-list-chat.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ThreadsComponent } from '../threads/threads.component';
import { CommunityComponent } from '../community/community.component';
import { ChatService } from '../../services/chat/chat.service';
import { CommonModule } from '@angular/common';
import { ChatMessage } from '../../models/chatMessage';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { ThreadsService } from '../../services/threads/threads.service';
import { CardThreadsComponent } from "../../components/card-threads/card-threads.component";
import { Thread } from '../../models/thread';

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
  @Input()thread: any = {}; // Inicializa `thread` con un objeto vacío

  
  constructor(private chatService: ChatService, private userService: UserService, private route: ActivatedRoute, private threadsService: ThreadsService ) { }

  ngOnInit() {
   
    this.route.params.subscribe(params => {
      let threadId = params['threadId'];
      // Ahora puedes usar threadId para cargar los datos del chat correspondiente
      this.getThreadById(threadId);
    });
  }
  getThreadById(id: string) {
    this.chatService.getThreadById(id).subscribe((thread: any) => {
      console.log('Received thread from server:', thread);
      this.thread = thread;
    });
  }
 
  sendMessage() {
    const message = new ChatMessage(1, new Date(),1, this.messageText, 1); // reemplazar los valores estáticos con los valores reales
    this.chatService.postMessage(message).subscribe(response => {
      console.log(response);
      this.getMessages(); // Actualiza los mensajes después de enviar uno nuevo
    });
  }
  getMessages() {
    this.chatService.getMessages().subscribe((messages: ChatMessage[]) => {
      this.messages = messages;
    });
  }
}

