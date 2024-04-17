import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LinkWithoutPageComponent } from '../link-without-page/link-without-page.component';

@Component({
  selector: 'app-dropdowns-requests',
  standalone: true,
  imports: [CommonModule, LinkWithoutPageComponent],
  templateUrl: './dropdowns-requests.component.html',
  styleUrl: './dropdowns-requests.component.css',
})
export class DropdownsRequestsComponent {
  @Input() public optionsVisible: boolean = false;

  notificationsCount: number = 0;

  toggleContent() {
    this.optionsVisible = !this.optionsVisible;
  }

  //Método para añadir notificaciones

  getNotifications() {
    this.notificationsCount += 1;
  }
}
