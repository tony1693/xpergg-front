import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    { path: 'Landing', component: LandingComponent},
    { path: 'Register', component: RegisterComponent},

];
