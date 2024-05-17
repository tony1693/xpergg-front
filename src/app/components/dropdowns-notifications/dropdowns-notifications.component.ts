import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { LinkWithoutPageComponent } from '../link-without-page/link-without-page.component';

@Component({
  selector: 'app-dropdowns-notifications',
  standalone: true,
  imports: [CommonModule, NavbarComponent, LinkWithoutPageComponent],
  templateUrl: './dropdowns-notifications.component.html',
  styleUrls: ['./dropdowns-notifications.component.css'],
})
export class DropdownsNotificationsComponent {
  likesCount: number = 0;
  commentsCount: number = 0;
  


  @Input() public linkImg: string = 'assets/icon/iconoNotificacionesR.svg';
  @Input() public optionsVisible: boolean = false;

  // Método para manejar añadir un "me gusta"
  getLikes() {
    this.likesCount += 1;
  }

  resetNotifications() {
    this.initialCommentsCount += this.messageCount;
    this.messageCount = 0;
    this.optionsVisible = !this.optionsVisible;
    this.lastReset = new Date();
  }

  // Método para manejar añadir un comentario
  getComments() {
    this.commentsCount += 1;
  }

  toggleContent() {
    this.optionsVisible = !this.optionsVisible;
  }
}
