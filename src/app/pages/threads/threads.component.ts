import { Component, Input, input } from '@angular/core';
import { DropdownsThreadsComponent } from '../../components/dropdowns-threads/dropdowns-threads.component';
import { CardThreadsComponent } from '../../components/card-threads/card-threads.component';
import { ThreadsService } from '../../services/threads/threads.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Thread } from '../../models/thread';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

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
  public platformTitle = 'PlayStation';

  public threads: Thread[] = [];
  public filteredThreads: Thread[] | null = null;

  constructor(
    private readonly threadsService: ThreadsService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const platform = this.activatedRoute.snapshot.params['platform'];
    this.threadsService.getThreads(platform).subscribe({
      next: (data: Thread[]) => {
        console.log(data);
        this.threads = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
    this.threads = [...this.threads];
    this.platformTitle = platform;
  }

  public search(inputText: string) {
    if (inputText === '') {
      this.threads = this.threads;
      setTimeout(() => {
        location.reload();
      }, 0.5);
    } else {
      this.threads = this.threads.filter((thread) =>
        thread.game.toLowerCase().includes(inputText.toLowerCase())
      );
    }
  }
}

// public searchByGame(inputText: HTMLInputElement) {
// if (inputText.value === '') {
// this.threadsService.getThreadsPS('').subscribe(
// (data) => {
// console.log(data);
// this.threads = data;
// },
// (error) => {
// console.log(error);
// }
// );
// } else {
// this.threadsService.getOneThread(inputText.value).subscribe(
// (data) => {
// console.log(data);
// this.threads = data;
// },
// (error) => {
// console.log('error esta aqui', error);
// }
// );
// }
// }
