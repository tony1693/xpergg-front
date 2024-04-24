import { Component, Input } from '@angular/core';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user/user.service';

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

  constructor(private userService: UserService){}
  //  isUser = { status: 'DISPONIBLE' };

  // toggleStatus() {
  //   this.isAvailable = !this.isAvailable;
  //   this.isUser.status = this.isAvailable ? 'DISPONIBLE' : 'AUSENTE';
  // }
}

  // toggleStatus() {
  //   this.isAvailable = !this.isAvailable;
  //   this.userService.updateUserAvailability(String(this.user.user_id), this.isAvailable).subscribe({
  //     next: response => console.log(response),
  //     error: error => console.error(error)
  //   });
  // }
