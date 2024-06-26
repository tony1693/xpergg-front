import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { LinkComponent } from './components/link/link.component';
import { FooterComponent } from './components/footer/footer.component';
import { TrendingNewsComponent } from './components/trending-news/trending-news.component';
import { VideoPostComponent } from './components/video-post/video-post.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { LandingComponent } from './pages/landing/landing.component';
import { RegisterComponent } from './pages/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InitComponent } from './pages/init/init.component';
import { ThreadsComponent } from './pages/threads/threads.component';
import { NewsComponent } from './pages/news/news.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
// import { YouTubePlayerModule } from '@angular/youtube-player';
import { StatusComponent } from './components/status/status.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LandingComponent,
    RegisterComponent,
    NavbarComponent,
    LinkComponent,
    FooterComponent,
    RouterLinkActive,
    InitComponent,
    TrendingNewsComponent,
    NewsComponent,
    ThreadsComponent,
    ChatComponent,
    VideoPostComponent,
    FormRegisterComponent,
    ProfileComponent,
    HttpClientModule,
    // YouTubePlayerModule,
    StatusComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'xpergg-front';
  likesCount: any;
  commentsCount: any;
}
