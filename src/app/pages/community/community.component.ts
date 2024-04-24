import { Component, Input } from '@angular/core';
import { PlatformCardComponent } from '../../components/platform-card/platform-card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ThreadsService } from '../../services/threads/threads.service';
import { Thread } from '../../models/thread';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [PlatformCardComponent, HttpClientModule],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css',
  providers: [ThreadsService],
})
export class CommunityComponent {
  public threads: Thread[] = [];

  constructor(private readonly threadsService: ThreadsService) {}

  public showThreadsPS() {
    this.threadsService.getThreadsPS().subscribe(
      (data: Thread[]) => {
        console.log(data);
        this.threads = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
