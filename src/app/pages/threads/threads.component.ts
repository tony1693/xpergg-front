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
  public filteredThread: Thread = {} as Thread;

  constructor(private readonly threadsService: ThreadsService) {}

  public searchByGame(inputText: HTMLInputElement) {
    if (inputText.value === '') {
      this.threadsService.getThreadsPS().subscribe(
        (data) => {
          console.log(data);
          this.threads = data;
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.threadsService.getOneThread(inputText.value).subscribe(
        (data) => {
          console.log(data);
          this.threads = data;
        },
        (error) => {
          console.log('error esta aqui', error);
        }
      );
    }
  }
}
