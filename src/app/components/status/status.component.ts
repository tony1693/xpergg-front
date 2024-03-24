import { Component, Input } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent {
  @Input() user!: User;

  getStatusText(): string {
    return this.user.status ? 'true' : 'false';  }

  getStatusColor(): string {
    return this.user.status ? 'green' : 'gray';
  }
}
 