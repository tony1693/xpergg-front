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
}
