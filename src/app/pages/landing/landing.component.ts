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
import { LandingApiService } from '../../services/landing-api/landing-api.service';


@Component({
    selector: 'app-landing',
    standalone: true,
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.css',
    imports: [HttpClientModule, CommonModule, RouterLink, FooterComponent, RegisterComponent, NavbarComponent, LinkComponent, TrendingNewsComponent, NewsComponent, TrendingNewsComponent  ],
    providers:[UserService,LandingApiService]

})
export class LandingComponent {
  games: any = [];



    public games1:any
  constructor(private readonly gamesLandingService: LandingApiService) {}

  ngOnInit() {
    this.getGamesLanding1()
  }
  getGamesLanding1() {
    this.gamesLandingService.getGamesLanding().subscribe(res => {
      this.games1 = res;      
    })
  }
    


