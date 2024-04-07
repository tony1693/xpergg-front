import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClient } from '@angular/common/http';
import { CommunityComponent } from './pages/community/community.component';
import { NewsComponent } from './pages/news/news.component';
import { InitComponent } from './pages/init/init.component';
import { ChatComponent } from './pages/chat/chat.component';

export const routes: Routes = [
<<<<<<< HEAD
  { path: '', redirectTo: '/Landing', pathMatch: 'full' },
  { path: 'Landing', component: LandingComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'HttpClient', component: HttpClient },
  { path: 'News', component: NewsComponent },
  { path: 'Init', component: InitComponent },
  { path: 'HttpClient', component: HttpClient },
  { path: 'Community', component: CommunityComponent },
  { path: 'Chat', component: ChatComponent },
=======
    { path: '', redirectTo: '/Landing', pathMatch: 'full' },
    { path: 'Landing', component: LandingComponent},
    { path: 'Register', component: RegisterComponent},
    { path: 'HttpClient', component:HttpClient},
    { path: 'News', component: NewsComponent},
    { path: 'Init', component: InitComponent},
    { path: 'HttpClient', component:HttpClient},
    { path: 'Community', component: CommunityComponent},

>>>>>>> main
];
