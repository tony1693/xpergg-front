import { Component, Input } from '@angular/core';
import { PlatformCardComponent } from '../../components/platform-card/platform-card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ThreadsService } from '../../services/threads/threads.service';
import { Thread } from '../../models/thread';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [PlatformCardComponent, HttpClientModule, RouterLink],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css',
  providers: [ThreadsService],
})
export class CommunityComponent {
  constructor() {}
}
