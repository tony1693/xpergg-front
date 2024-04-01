import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { RegisterComponent } from '../register/register.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { LinkComponent } from '../../components/link/link.component';

@Component({
    selector: 'app-landing',
    standalone: true,
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.css',
    imports: [RouterLink, HeaderComponent, FooterComponent,RegisterComponent,NavbarComponent,LinkComponent]
})
export class LandingComponent {

}