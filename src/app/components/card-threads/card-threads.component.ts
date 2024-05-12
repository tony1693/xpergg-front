import { Component, Input } from '@angular/core';
import { ThreadsService } from '../../services/threads/threads.service';
import { Thread } from '../../models/thread';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ChatMessage } from '../../models/chatMessage';
import { ChatService } from '../../services/chat/chat.service';

@Component({
  selector: 'app-card-threads',
  standalone: true,
  imports: [HttpClientModule, RouterModule],
  templateUrl: './card-threads.component.html',
  styleUrl: './card-threads.component.css',
  providers: [ThreadsService, ChatService],
})
export class CardThreadsComponent {
  @Input() public thread!: Thread;
}
