import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, TrackByFunction } from '@angular/core';
import { StatusComponent } from '../status/status.component';
import { User } from '../../models/user';
import { ChatMessage } from '../../models/chatMessage';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../services/chat/chat.service';
import { ThreadsService } from '../../services/threads/threads.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-user-list-chat',
  standalone: true,
  imports: [CommonModule, StatusComponent],
  templateUrl: './user-list-chat.component.html',
  styleUrl: './user-list-chat.component.css',
})
export class UserListChatComponent implements OnInit {
[x: string]: any;
  
  @Input() title: string = '';
  @Input() available_to_play: boolean = true;
  @Input() usersList: any[] = [];
  @Input() chat_id!: number;
  @Input() usersChat!: any[];
  @Input() message!: any[];
  @Input() userId!: number;
  

  constructor(private chatService: ChatService, private userService: UserService, private route: ActivatedRoute, private threadsService: ThreadsService ) {}
  @Output() userSelected = new EventEmitter<number>();

  selectUser(userId: number) {
    this.userSelected.emit(userId);
  }
  ngOnInit(): void {
  
  }
  trackByUserId(index: number, user: any): number {
    return user.id;
  }
  
  }
  