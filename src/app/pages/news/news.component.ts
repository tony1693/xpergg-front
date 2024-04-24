import { Component } from '@angular/core';
import { TrendingNewsComponent } from '../../components/trending-news/trending-news.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { GamesApiService } from '../../services/games-api/games-api.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [TrendingNewsComponent, NavbarComponent,FooterComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
  providers:[GamesApiService,]
})
export class NewsComponent {
  public games:any
  constructor(private readonly gamesService: GamesApiService) {}

  ngOnInit() {
    this.getGames()
  }
  getGames() {
    this.gamesService.getGames().subscribe(res => {
      this.games = res;      
    })
  }
}
