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
import { CardThreadsComponent } from '../../components/card-threads/card-threads.component';
import { Thread } from '../../models/thread';
import { catchError } from 'rxjs/internal/operators/catchError';
import { of } from 'rxjs/internal/observable/of';
import { User } from '../../models/user';

@Component({
  selector: 'app-chat',
  standalone: true,
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
  providers: [ChatService, UserService, ThreadsService],
  imports: [
    UserListChatComponent,
    RouterLink,
    ThreadsComponent,
    CommunityComponent,
    CommonModule,
    FormsModule,
    CardThreadsComponent,
    ThreadsComponent,
  ],
})
export class ChatComponent {
  public users: User[] = [];
  public chat_id!: number;
  public activeUserId: any;
  public name: string = '';
  public imgavatar!: string;
  public messages: ChatMessage[] = [];
  public messageText: string = '';
  public thread_id!: number;
  public chat_message_id!: number;
  public user_id!: number;
  // usersChat: User[] = [];
  public usersChat: any[] = [];
  public message!: any[];
  @Input() user!: User;
  @Input() thread: any = {}; // Inicializa `thread` con un objeto vacío
  @Input() userId!: number;
  handleUserSelected: any;
  available_to_play: boolean = false;

  constructor(
    private chatService: ChatService,
    private userService: UserService,
    private route: ActivatedRoute,
    private threadsService: ThreadsService
  ) {
    // Obtenemos los users desde localStorage
    let usersFromStorage = localStorage.getItem('user');
    this.users = usersFromStorage ? JSON.parse(usersFromStorage) : [];
    console.log(usersFromStorage);
    console.log(this.users);

    // Aquí recuperamos el estado del usuario desde el almacenamiento local
    let userStatusFromStorage = localStorage.getItem('userStatus');
    this.available_to_play =
      userStatusFromStorage === 'DISPONIBLE' ? true : false;
    console.log(userStatusFromStorage);

    // Aquí recuperamos el userName:
    const userDataString = localStorage.getItem('user');
    const userData = userDataString ? JSON.parse(userDataString) : null;
    const userName = userData ? userData.name : '';
    localStorage.setItem('name', userName);
    console.log(userName);

    // Aquí recuperamos el avatar:
    const avatarDataString = localStorage.getItem('avatar');
    this.imgavatar = avatarDataString as string;
    console.log(this.imgavatar);
  }

  // ngOnInit() {
  //   // Obtenemos el objeto de usuario desde localStorage
  //   const user = localStorage.getItem('user');
  //   if (user) {
  //     const parsedUser = JSON.parse(user);
  //     this.user_id = parsedUser.user_id;
  //   }
  //   console.log('este es el user_id logeado', this.user_id);

  //   this.route.params.subscribe((params) => {
  //     let threadId = params['threadId'];
  //     console.log('threadId:', threadId);
  //     this.getThreadById(threadId);
  //   });
  //   this.getMessagesById();

  //   // this.getUsersChat();

  //   this.chatService
  //     .getMessageChatUserId(this.chat_id)
  //     .subscribe((userId: number) => {
  //       this.user_id = userId;
  //     });
  // }

  // getThreadById(id: string) {
  //   this.chatService.getThreadById(id).subscribe((thread: any) => {
  //     console.log('Received thread from server:', thread);
  //     this.thread = thread[0];
  //     this.chat_message_id = this.thread.thread_id; // Usa thread_id en lugar de chat_id
  //     this.getMessagesById(); // Llama a getMessagesById aquí después de que chat_id se haya definido
  //     console.log('chat_id:', this.chat_message_id); // Añade esta línea
  //   });
  // }

  // getMessagesById() {
  //   // Comprueba si `this.chat_message_id` tiene un valor antes de realizar la solicitud
  //   if (this.chat_message_id) {
  //     this.chatService.getMessagesById(Number(this.chat_message_id)).subscribe({
  //       next: (messages: ChatMessage[]) => {
  //         this.messages = messages;
  //         console.log('Mensajes recibidos:', messages);
  //       },
  //       error: (error: any) => {
  //         console.error('Error al recuperar mensajes:', error);
  //         // Maneja el error de forma adecuada (mostrar mensaje al usuario, etc.)
  //         return Error(error); // Propaga el error
  //       },
  //     });
  //   } else {
  //     console.warn(
  //       'chat_message_id no está definido. No se pueden recuperar mensajes.'
  //     );
  //   }
  // }

  public addMessageToChat(inputMessage: HTMLInputElement) {
    const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const userId: number = JSON.parse(
      localStorage.getItem('user') as string
    ).user_id;
    const userName = localStorage.getItem('name') as string;
    const avatar = localStorage.getItem('avatar') as string;

    let newChatMessage: ChatMessage = {
      chat_message_id: 0,
      date: currentDate,
      user_id: userId,
      text: inputMessage.value,
      chat_id: 0,
      thread_id: this.thread_id,
      user_avatar: avatar,
      user_name: userName,
    };
    localStorage.setItem('fecha creacion post', currentDate);
    this.chatService.postMessage(newChatMessage).subscribe({
      next: (data) => {
        console.log(data);
        window.location.reload();
        setTimeout(() => {
          location.reload();
        }, 1);
      },
      error: (error) => {
        console.log(error);
      },
    });
    console.log(this.thread_id);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.thread_id = params['threadId'];
    });
    this.chatService.getAllMessages(this.thread_id).subscribe({
      next: (data) => {
        console.log(data);
        this.messages = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
    // getThreadById(id: string) {
    //     this.chatService.getThreadById(id).subscribe((thread: any) => {
    //       console.log('Received thread from server:', thread);
    //       this.thread = thread[0];
    //       this.chat_message_id = this.thread.thread_id; // Usa thread_id en lugar de chat_id
    //       this.getMessagesById(); // Llama a getMessagesById aquí después de que chat_id se haya definido
    //       console.log('chat_id:', this.chat_message_id); // Añade esta línea
    //     });
  }

  // getAllMessages() {
  //   this.route.params.subscribe((params) => {
  //     let threadId = params['threadId'];
  //     console.log('threadId:', threadId);
  //     this.getThreadById(threadId);
  //   });
  // }

  // sendMessage(chat_id: number, user_id: number, text: string) {
  //   const message = new ChatMessage(
  //     0,
  //     new Date(),
  //     user_id,
  //     text,
  //     chat_id,
  //     this.name,
  //     this.imgavatar
  //   );
  //   const user_name = localStorage.getItem('name');
  //   const imgavatar = localStorage.getItem('avatar');
  //   this.chatService.postMessage(message).subscribe((response) => {
  //     console.log(response);
  //     this.getMessagesById(); // Actualiza los mensajes después de enviar uno nuevo
  //     console.log('Mensajes recibidos:', this.messages);
  //     console.log(response);
  //   });
  //   window.location.reload();
  // }

  // getUserIdFromChat() {
  //   // Llama a getMessageChatUserId aquí, después de que this.chat_id se haya definido
  //   this.chatService.getMessageChatUserId(this.chat_id).subscribe((userId: number) => {
  //     this.user_id = userId;
  //   });
  //   window.location.reload()
  // }

  // trackByUserId(index: number, user: User): number {
  //   return user.user_id;
  // }
}
