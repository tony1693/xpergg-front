import { Component } from '@angular/core';
import { TrendingNewsComponent } from '../../components/trending-news/trending-news.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [TrendingNewsComponent, NavbarComponent,FooterComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {

}
