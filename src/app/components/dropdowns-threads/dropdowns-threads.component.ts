import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Thread } from '../../models/thread';
import { ThreadsService } from '../../services/threads/threads.service';

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

  constructor(private readonly threadsService: ThreadsService) {}

  public toggleDropdown() {
    this.dropdownOpen = false;
    window.location.reload();
  }

  public openDropdown() {
    this.dropdownOpen = true;
  }

  public createThread(
    subject: HTMLInputElement,
    game: HTMLInputElement,
    platform: HTMLSelectElement
  ) {
    const currentDate = new Date().toISOString();
    let newThread: Thread = {
      user_id: 1, //hay que cambiar el user_id y que venga del localStorage
      subject: subject.value,
      game: game.value,
      platform: platform.value,
      date: currentDate,
    };
    localStorage.setItem('creacionHilo', currentDate);
    this.threadsService.addNewThread(newThread).subscribe(
      (data) => {
        console.log(data);
        this.message = 'Hilo creado correctamente';
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
