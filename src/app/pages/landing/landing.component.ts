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

@Component({
    selector: 'app-landing',
    standalone: true,
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.css',
    imports: [HttpClientModule, CommonModule, RouterLink, FooterComponent, RegisterComponent, NavbarComponent, LinkComponent, TrendingNewsComponent, NewsComponent, TrendingNewsComponent ],
    providers:[UserService]
})
export class LandingComponent {

    newsText1 = 'Texto de la noticia 1';
    newsImage1 = 'URL de la imagen de la noticia 1';
    newsLink1 = 'URL del enlace de la noticia 1';

    newsText2 = 'Texto de la noticia 2';
    newsImage2 = 'URL de la imagen de la noticia 2';
    newsLink2 = 'URL del enlace de la noticia 2';

    newsText3 = 'Texto de la noticia 3';
    newsImage3 = 'URL de la imagen de la noticia 3';
    newsLink3 = 'URL del enlace de la noticia 3';

    

}


