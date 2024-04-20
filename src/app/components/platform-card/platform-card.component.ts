import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-platform-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './platform-card.component.html',
  styleUrl: './platform-card.component.css',
})
export class PlatformCardComponent {
  @Input() public icon: string = '';
  @Input() public img: string = '';
  @Input() public threadRouting: string = '';
}
