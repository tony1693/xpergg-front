import { Component, input } from '@angular/core';
import { TrendingNewsComponent } from '../../components/trending-news/trending-news.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [TrendingNewsComponent, NavbarComponent,FooterComponent,CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {

  games: any[] = []; 

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchDataFromAPI();
  }

  fetchDataFromAPI() {
    this.http.get<any[]>('https://www.freetogame.com/api/games').subscribe(data => {
      this.games = data.map(game => {
        return {
          title: game.title,
          thumbnail: game.thumbnail,
          url: game.game_url
        };
      });
    });
  }
}
