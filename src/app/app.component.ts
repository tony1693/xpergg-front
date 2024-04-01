import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LinkComponent } from './components/link/link.component';
import { FooterComponent } from './components/footer/footer.component';
import { TrendingNewsComponent } from './components/trending-news/trending-news.component';
import { VideoPostComponent } from './components/video-post/video-post.component';
import { LandingComponent } from "./pages/landing/landing.component";
import { RegisterComponent } from './pages/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, LandingComponent,RegisterComponent, HeaderComponent,NavbarComponent, FooterComponent]
})
export class AppComponent {
  title = 'xpergg-front';
}
