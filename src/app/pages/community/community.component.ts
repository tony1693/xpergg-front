import { Component, Input } from '@angular/core';
import { PlatformCardComponent } from '../../components/platform-card/platform-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [PlatformCardComponent],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css',
})
export class CommunityComponent {}
