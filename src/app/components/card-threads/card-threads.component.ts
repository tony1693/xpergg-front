import { Component, Input } from '@angular/core';
import { ThreadsService } from '../../services/threads/threads.service';
import { Thread } from '../../models/thread';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-card-threads',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './card-threads.component.html',
  styleUrl: './card-threads.component.css',
  providers: [ThreadsService],
})
export class CardThreadsComponent {
  @Input() public message!: string;
  @Input() public game!: string;
  @Input() public platform!: string;

  public threads: Thread[] = [];

  constructor(private readonly threadsService: ThreadsService) {}

  ngOnInit(): void {
    // aquí meter todos los hilos ya creados ordenados por fecha
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
