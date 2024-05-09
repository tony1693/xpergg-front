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

Number(arg0: typeof ChatMessage): number {
throw new Error('Method not implemented.');
}
  messages: ChatMessage[] = [];
  messageText: string = '';
  thread_id!: number;
  chat_id!: number;
  user_id!: number;
  
  @Input()thread: any = {}; // Inicializa `thread` con un objeto vacío

  constructor(private chatService: ChatService, private userService: UserService, private route: ActivatedRoute, private threadsService: ThreadsService ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let threadId = params['threadId'];
      console.log('threadId:', threadId);  // Añade esta línea
      this.getThreadById(threadId);
    });
  }
  
  getThreadById(id: string) {
    this.chatService.getThreadById(id).subscribe((thread: any) => {
      console.log('Received thread from server:', thread);
      this.thread = thread[0];
      this.chat_id = this.thread.thread_id; // Usa thread_id en lugar de chat_id
      console.log('chat_id:', this.chat_id);  // Añade esta línea
      this.getMessagesById(); // Llama a getMessagesById aquí después de que chat_id se haya definido
    });
  }
  
  
 
  getMessagesById() {
    this.chatService.getMessagesById(this.chat_id).subscribe((messages: ChatMessage[]) => {
      this.messages = messages;
      console.log(messages)
    });
  }

  sendMessage(chat_id: number, user_id: number, text: string) {
    const message = new ChatMessage(0, new Date(), user_id, text, chat_id);
    this.chatService.postMessage(message).subscribe(response => {
      console.log(response);
      this.getMessagesById(); // Actualiza los mensajes después de enviar uno nuevo
    });
  }
}
