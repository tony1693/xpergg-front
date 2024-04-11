import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClient } from '@angular/common/http';
import { CommunityComponent } from './pages/community/community.component';
import { NewsComponent } from './pages/news/news.component';
import { InitComponent } from './pages/init/init.component';
import { ThreadsComponent } from './pages/threads/threads.component';

export const routes: Routes = [
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: 'landing', component: LandingComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'httpClient', component:HttpClient},
    { path: 'news', component: NewsComponent},
    { path: 'init', component: InitComponent},
    { path: 'httpClient', component:HttpClient},
    { path: 'threads', component:ThreadsComponent},
];
