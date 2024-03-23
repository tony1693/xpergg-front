import { Component, Input } from '@angular/core';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css'
})
export class AvatarComponent {
  @Input() user!: User;
  @Input() public selectedAvatar: string = ''; 
  @Input() public nameUser: string = ''; 


  constructor() {
  }
}
