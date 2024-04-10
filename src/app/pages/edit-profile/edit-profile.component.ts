import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AvatarComponent } from '../../components/avatar/avatar.component';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [CommonModule, AvatarComponent],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css',
})
export class EditProfileComponent {
  @Input() public currentAvatar: string = 'assets/avatar/Paul_2.webp';
}
