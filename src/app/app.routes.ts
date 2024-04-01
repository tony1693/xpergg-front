import { Routes } from '@angular/router';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [
  { path: 'Login', component: FormLoginComponent },
  { path: 'Users-list', component: UsersListComponent },
];
