import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Thread } from '../../models/thread';
import { ThreadsService } from '../../services/threads/threads.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dropdowns-threads',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdowns-threads.component.html',
  styleUrl: './dropdowns-threads.component.css',
  providers: [ThreadsService],
})
export class DropdownsThreadsComponent {
  public createdThreads: Thread[] = [];
  public dropdownOpen: boolean = false;
  public message: string = '';

  constructor(
    private readonly threadsService: ThreadsService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  public toggleDropdown() {
    this.dropdownOpen = false;
  }

  public openDropdown() {
    this.dropdownOpen = true;
  }

  public createThread(subject: HTMLInputElement, game: HTMLInputElement) {
    const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');

    // aqui me traigo el user desde el localStorage
    const userId: number = JSON.parse(
      localStorage.getItem('user') as string
    ).user_id;
    if (userId) {
      let newThread: Thread = {
        user_id: userId,
        subject: subject.value,
        game: game.value,
        platform: this.activatedRoute.snapshot.params['platform'],
        date: currentDate,
      };
      this.threadsService.addNewThread(newThread).subscribe({
        next: (data) => {
          console.log(data);
          this.message = 'Hilo creado correctamente';
          setTimeout(() => {
            location.reload();
          }, 1);
        },
        error: (error) => {
          console.log(error);
        },
      });
    } else {
      console.log('Error al crear el hilo');
    }
  }
}
