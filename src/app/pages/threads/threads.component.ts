import { Component, Input } from '@angular/core';
import { DropdownsThreadsComponent } from '../../components/dropdowns-threads/dropdowns-threads.component';
import { CardThreadsComponent } from '../../components/card-threads/card-threads.component';
import { ThreadsService } from '../../services/threads/threads.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Thread } from '../../models/thread';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-threads',
  standalone: true,
  imports: [DropdownsThreadsComponent, CardThreadsComponent, HttpClientModule],
  templateUrl: './threads.component.html',
  styleUrl: './threads.component.css',
  providers: [ThreadsService],
})
export class ThreadsComponent {
  public message = '';
  public game = '';
  public platform = '';
  @Input() public platformTitle = 'PlayStation';

  public threads: Thread[] = [];

  constructor(private readonly threadsService: ThreadsService) {}

  ngOnInit(): void {
    // aquí meter todos los hilos ya creados ordenados por fecha

    this.threadsService.getThreads().subscribe(
      (data: Thread[]) => {
        this.threads = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
