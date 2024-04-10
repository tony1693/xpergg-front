
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dropdowns-notifications',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './dropdowns-notifications.component.html',
  styleUrls: ['./dropdowns-notifications.component.css']
})

export class DropdownsNotificationsComponent {
  likesCount: number = 0; 
  commentsCount: number = 0; 

  // Método para manejar añadir un "me gusta"
  getLikes() {
   
    this.likesCount += 1;
  }

  // Método para manejar añadir un comentario
  getComments() {

    this.commentsCount += 1;
  }
}
