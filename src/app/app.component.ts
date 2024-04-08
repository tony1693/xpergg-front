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
import { NewsComponent } from './pages/news/news.component';
import { ChatComponent } from './pages/chat/chat.component';

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
    ChatComponent, 
    VideoPostComponent, 
    FormRegisterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'xpergg-front';
}
