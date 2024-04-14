import { Component, Input } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';

@Component({
  selector: 'app-avatar-options',
  standalone: true,
  imports: [AvatarComponent, CommonModule],
  templateUrl: './avatar-options.component.html',
  styleUrl: './avatar-options.component.css',
})
export class AvatarOptionsComponent {
  userModel!: User;
  @Input() public selectedAvatar: string = '';
  @Input() public optionsVisible: boolean = false;

  // Funcion para cambiar avatar //

  avatars = [
    { avatar_Id: 1, selectedAvatar: 'assets/avatar/call_of_duty-2.jpg' },
    { avatar_Id: 2, selectedAvatar: 'assets/avatar/call-duty.webp' },
    { avatar_Id: 3, selectedAvatar: 'assets/avatar/fall_guys.png' },
    { avatar_Id: 4, selectedAvatar: 'assets/avatar/fortnite-1.jpg' },
    { avatar_Id: 5, selectedAvatar: 'assets/avatar/fortnite-2.jpg' },
    { avatar_Id: 6, selectedAvatar: 'assets/avatar/fortnite-3.jpg' },
    { avatar_Id: 7, selectedAvatar: 'assets/avatar/god_of_war.jpg' },
    { avatar_Id: 8, selectedAvatar: 'assets/avatar/gtaV_girl-2.webp' },
    { avatar_Id: 9, selectedAvatar: 'assets/avatar/gtaV.jpg' },
    { avatar_Id: 10, selectedAvatar: 'assets/avatar/lol.png' },
    { avatar_Id: 11, selectedAvatar: 'assets/avatar/Paul_2.webp' },
    { avatar_Id: 12, selectedAvatar: 'assets/avatar/prince-of-persia.jpg' },
    { avatar_Id: 13, selectedAvatar: 'assets/avatar/red_dead.png' },
    { avatar_Id: 14, selectedAvatar: 'assets/avatar/Tekken_jim.jpg' },
  ];

  constructor() {}

  toggleOptions() {
    this.optionsVisible = true;
  }

  closeOptions() {
    this.optionsVisible = false;
  }

  modifyAvatar(avatar: any) {
    this.selectedAvatar = avatar.selectedAvatar;
    console.log('Avatar modificado');
  }
}
