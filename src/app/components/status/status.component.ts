import { Component, Input } from '@angular/core';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent {
  @Input() user!: User;

  isAvailable = true;
   isUser = { status: 'DISPONIBLE' };

  toggleStatus() {
    this.isAvailable = !this.isAvailable;
    this.isUser.status = this.isAvailable ? 'DISPONIBLE' : 'AUSENTE';
  }
}


 