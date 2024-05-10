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
import { catchError } from 'rxjs/internal/operators/catchError';
import { of } from 'rxjs/internal/observable/of';

@Component({
    selector: 'app-chat',
    standalone: true,
    templateUrl: './chat.component.html',
    styleUrl: './chat.component.css',
    providers: [ChatService, UserService,ThreadsService],
    imports: [UserListChatComponent, RouterLink, ThreadsComponent, CommunityComponent, CommonModule, FormsModule, CardThreadsComponent, ThreadsComponent]
})
export class ChatComponent {
  chat_id!: string;

Number(arg0: typeof ChatMessage): number {
throw new Error('Method not implemented.');
}
  messages: ChatMessage[] = [];
  messageText: string = '';
  thread_id!: number;
  chat_message_id!: number;
  user_id!: number;
  
  @Input()thread: any = {}; // Inicializa `thread` con un objeto vacío

  constructor(private chatService: ChatService, private userService: UserService, private route: ActivatedRoute, private threadsService: ThreadsService ) { }
  // Obtenemos los users desde localStorage


  ngOnInit() {
      // Obtenemos el objeto de usuario desde localStorage
  const user = localStorage.getItem('user');
  if (user) {
    const parsedUser = JSON.parse(user);
    this.user_id = parsedUser.user_id;
  }
    console.log(this.user_id);

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
      this.chat_message_id = this.thread.thread_id; // Usa thread_id en lugar de chat_id
      this.getMessagesById(); // Llama a getMessagesById aquí después de que chat_id se haya definido
      console.log('chat_id:', this.chat_message_id);  // Añade esta línea
      
    });
  }

  getMessagesById() {
    // Comprueba si `this.chat_message_id` tiene un valor antes de realizar la solicitud
    if (this.chat_message_id) {
      this.chatService.getMessagesById(Number(this.chat_message_id)).subscribe({
        next: (messages: ChatMessage[]) => {
          this.messages = messages;
          console.log('Mensajes recibidos:', messages);
        },
        error: (error: any) => {
          console.error('Error al recuperar mensajes:', error);
          // Maneja el error de forma adecuada (mostrar mensaje al usuario, etc.)
          return Error(error); // Propaga el error
        }
      });
    } else {
      console.warn('chat_message_id no está definido. No se pueden recuperar mensajes.');
    }
  }
  


  sendMessage(chat_id: number, user_id: number, text: string) {
    const message = new ChatMessage(0, new Date(), this.user_id, text, chat_id);
    this.chatService.postMessage(message).subscribe(response => {
      console.log(response);
      this.getMessagesById(); // Actualiza los mensajes después de enviar uno nuevo
      console.log('Mensajes recibidos:', this.messages);
      console.log(response);
    });
  }
}
