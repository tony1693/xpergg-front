import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { RegisterComponent } from '../register/register.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { LinkComponent } from '../../components/link/link.component';
import { TrendingNewsComponent } from '../../components/trending-news/trending-news.component';
import { NewsComponent } from '../news/news.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../services/user/user.service';
import { CommonModule } from '@angular/common';
import { GamesApiService } from '../../services/games-api/games-api.service';

@Component({
    selector: 'app-landing',
    standalone: true,
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.css',
    imports: [HttpClientModule, CommonModule, RouterLink, FooterComponent, RegisterComponent, NavbarComponent, LinkComponent, TrendingNewsComponent, NewsComponent, TrendingNewsComponent ],
    providers:[UserService, GamesApiService]
})
export class LandingComponent {

    constructor(private readonly userService: UserService, private readonly gameService:GamesApiService) {}

    games: any;

    ngOnInit() {
        this.getGames()
      }
      getGames() {
        this.gameService.getGames().subscribe(res => {
          this.games = res;      
        })
      }


}


