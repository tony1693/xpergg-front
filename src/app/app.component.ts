import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LinkComponent } from './components/link/link.component';
import { FooterComponent } from './components/footer/footer.component';
import { TrendingNewsComponent } from './components/trending-news/trending-news.component';
import { VideoPostComponent } from './components/video-post/video-post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LinkComponent, FooterComponent, TrendingNewsComponent, VideoPostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'xpergg-front';
}
