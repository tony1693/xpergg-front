import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThreadsService } from '../../services/threads/threads.service';
import { Thread } from '../../models/thread';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-platform-card',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './platform-card.component.html',
  styleUrl: './platform-card.component.css',
})
export class PlatformCardComponent {
  @Input() public icon: string = '';
  @Input() public img: string = '';
  @Input() public threadRouting: string = '';

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

  public showThreadsXbox() {
    this.threadsService.getThreadsXbox().subscribe(
      (data: Thread[]) => {
        console.log(data);
        this.threads = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public acceder() {
    if (this.threadRouting === 'PlayStation') {
      this.showThreadsPS();
    } else if (this.threadRouting === 'X-Box') {
      this.showThreadsXbox();
    } else {
      console.log('No se encuentra esta plataforma');
    }
  }
}
