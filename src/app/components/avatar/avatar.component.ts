import { Component, Input } from '@angular/core';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css',
})
export class AvatarComponent {
  @Input() user!: User;
  @Input() public selectedAvatar: string = '';
  @Input() public userName: string = '';
  @Input() public profileRouting: string = '';

  constructor() {}
}
