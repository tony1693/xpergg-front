import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClient } from '@angular/common/http';
import { CommunityComponent } from './pages/community/community.component';
import { NewsComponent } from './pages/news/news.component';
import { InitComponent } from './pages/init/init.component';
import { ChatComponent } from './pages/chat/chat.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { ThreadsComponent } from './pages/threads/threads.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'http-client', component: HttpClient },
  { path: 'news', component: NewsComponent },
  { path: 'init', component: InitComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'chat/:threadId', component: ChatComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'threads/:platform', component: ThreadsComponent },
  { path: 'thread', component: ThreadsComponent},
];
