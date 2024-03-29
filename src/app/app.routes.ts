import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClient } from '@angular/common/http';

export const routes: Routes = [
    { path: '', redirectTo: '/Landing', pathMatch: 'full' },
    { path: 'Landing', component: LandingComponent},
    { path: 'Register', component: RegisterComponent},
    { path: 'HttpClient', component:HttpClient}

];
