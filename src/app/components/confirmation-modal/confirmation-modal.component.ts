import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmation-modal.component.html',
  styleUrl: './confirmation-modal.component.css',
})
export class ConfirmationModalComponent {
  @Input() public buttonText: string = 'Cambiar';
  @Input() public confirmationText: string =
    '¿Estás seguro de que deseas modificar los datos?';
  @Input() public closeModal: string = 'Cancelar';
  @Input() public acceptModal: string = 'Aceptar';

  changePassword() {
    console.log('Contraseña cambiada con éxito');
  }
}
