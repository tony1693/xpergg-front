import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-platform-card',
  standalone: true,
  imports: [],
  templateUrl: './platform-card.component.html',
  styleUrl: './platform-card.component.css'
})
export class PlatformCardComponent {
  @Input() icon!: string;
  @Input() img!: string;
}
