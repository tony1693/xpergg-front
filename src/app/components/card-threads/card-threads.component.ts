import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-threads',
  standalone: true,
  imports: [],
  templateUrl: './card-threads.component.html',
  styleUrl: './card-threads.component.css'
})
export class CardThreadsComponent {
  @Input() public message!: string;
  @Input() public game!: string;
  @Input() public platform!: string;

}
