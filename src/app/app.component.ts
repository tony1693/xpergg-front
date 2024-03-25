import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LinkComponent } from './components/link/link.component';
import { RegisterComponent } from './pages/register/register.component';

import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LinkComponent, ConfirmationModalComponent,RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'xpergg-front';
}
