import { Component } from '@angular/core';
import { PlatformCardComponent } from '../../components/platform-card/platform-card.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [PlatformCardComponent, NavbarComponent],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css',
})
export class CommunityComponent {}
