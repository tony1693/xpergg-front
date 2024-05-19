import { Component, ElementRef, Input, ViewChild } from '@angular/core';
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
  public name: string = '';
  public imgavatar!: string;
  public messages: ChatMessage[] = [];
  public messageText: string = '';
  public thread_id!: number;
  public chat_message_id!: number;
  public user_id!: number;
  public usersChat: any[] = [];
  public message!: any[];
  public handleUserSelected: any;
  public available_to_play: boolean = false;
  public activeUserId: any;

  @Input() user!: User;
  @Input() thread!: Thread; // Inicializa `thread` con un objeto vacío
  @Input() userId!: number;
  @ViewChild('chatContainer') private chatContainer!: ElementRef;
  updateUserStatus: any;
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

     // Aquí recuperamos el userId:
     const userIdDataString = localStorage.getItem('user');
     const userIdData = userDataString ? JSON.parse(userDataString) : null;
     const userId = userData ? userData.user_id : '';
     localStorage.setItem('name', userName);
     console.log('userNmae localstorage: ',userName);

}

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
      this.chatService
        .getThreadById(this.thread_id)
        .subscribe((thread: any) => {
          console.log('Received thread from server:', thread);
          this.thread = thread[0];
        });
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
   
    this.activeUserId = localStorage.getItem('name');
    this.isMessageFromActiveUser;
    this.updateUserStatus();

    window.addEventListener('storage', () => {
      this.updateUserStatus();
    });
    
  }

  getUniqueUsers(messages: any) {
    const uniqueUsers = [];
    const map = new Map();
    for (const message of messages) {
      if(!map.has(message.user_id)){
          map.set(message.user_id, true);
          uniqueUsers.push(message);
      }
    }
    return uniqueUsers;
  }
  isMessageFromActiveUser(messageUserName: string): boolean {
    return messageUserName === this.activeUserId;
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }

  isUserAvailable(userId: number): boolean {
    let userStatus = localStorage.getItem(`userStatus_${userId}`);
    return userStatus === 'DISPONIBLE';
  }
  
}
