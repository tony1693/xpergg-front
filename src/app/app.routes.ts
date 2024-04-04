import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClient } from '@angular/common/http';
// import { InitComponent } from './pages/init/init.component';
import { CommunityComponent } from './pages/community/community.component';

export const routes: Routes = [
  { path: '', redirectTo: '/Landing', pathMatch: 'full' },
  { path: 'Landing', component: LandingComponent },
  { path: 'Register', component: RegisterComponent },
  // { path: 'Init', component: InitComponent },
  { path: 'HttpClient', component: HttpClient },
  { path: 'Community', component: CommunityComponent },
];
