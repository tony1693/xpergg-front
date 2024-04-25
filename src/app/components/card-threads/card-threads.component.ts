import { Component, Input } from '@angular/core';
import { ThreadsService } from '../../services/threads/threads.service';
import { Thread } from '../../models/thread';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-threads',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './card-threads.component.html',
  styleUrl: './card-threads.component.css',
  providers: [ThreadsService],
})
export class CardThreadsComponent {
  @Input() public thread!: Thread;
}
