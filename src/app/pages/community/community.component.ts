import { Component, Input } from '@angular/core';
import { PlatformCardComponent } from '../../components/platform-card/platform-card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [PlatformCardComponent, HttpClientModule],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css',
})
export class CommunityComponent {}
