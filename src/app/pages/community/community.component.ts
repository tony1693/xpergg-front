import { Component } from '@angular/core';
import { PlatformCardComponent } from '../../components/platform-card/platform-card.component';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [PlatformCardComponent],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css',
})
export class CommunityComponent {}
