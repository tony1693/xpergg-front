import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-confirmation-modal',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './confirmation-modal.component.html',
  styleUrl: './confirmation-modal.component.css',
})
export class ConfirmationModalComponent {
  @Input() public buttonText: string = 'Cambiar';
  @Input() public confirmationText: string =
    '¿Estás seguro de que deseas modificar los datos?';
  @Input() public closeModal: string = 'Cancelar';
  @Input() public acceptModal: string = 'Aceptar';

  update() {
    window.location.reload();
    setTimeout(() => {
      location.reload()
    }, 0.5);
  }

 
}
