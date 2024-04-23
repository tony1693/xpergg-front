import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Observable, Subject } from 'rxjs';
import { UserService } from '../../services/user/user.service';


@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
  providers:[UserService],
})
export class StatusComponent {
  @Input() user!: User;
  
  available_to_play = false;
  isUser = { avalaible_to_play: 'AUSENTE' };

  // Crea un Subject para manejar el estado
  private statusSubject = new Subject<boolean>();

  constructor(private userService: UserService) { }

  ngOnInit() {
    // Establecer el estado como 'AUSENTE' al iniciar sesión
    this.available_to_play = false;
    this.isUser.avalaible_to_play = 'AUSENTE';

    // Actualizar el estado en el almacenamiento local
    localStorage.setItem('userStatus', this.isUser.avalaible_to_play);

    // Emitir el nuevo estado a través del Subject
    this.statusSubject.next(this.available_to_play);
  }

  // Función para cambiar el estado de disponibilidad
  toggleStatus() {
    this.available_to_play = !this.available_to_play;
    this.isUser.avalaible_to_play = this.available_to_play ? 'DISPONIBLE' : 'AUSENTE';

    // Actualizar el estado en el almacenamiento local
    localStorage.setItem('userStatus', this.isUser.avalaible_to_play);

    // Emitir el nuevo estado a través del Subject
    this.statusSubject.next(this.available_to_play);

    // Llamar al servicio para actualizar el estado en la base de datos
    const userId = this.user.user_id.toString();
    this.userService.updateUserAvailability(userId, this.available_to_play).subscribe({
      next: () => {
        console.log('Estado actualizado correctamente');
      },
      error: (error) => {
        console.error('Error al actualizar el estado:', error);
        // Emitir el error a través del Subject
        this.statusSubject.error(error);
      }
    });

    // Suscribirse al Observable del estado
    this.getStatusObservable().subscribe((available_to_play: boolean) => {
      console.log('El estado es', available_to_play);
      // Aquí se podría hacer algo con el estado....
    });
  }

  // Método para obtener el Observable del estado
  getStatusObservable(): Observable<boolean> {
    return this.statusSubject.asObservable();
  }



  // Función para hacer logout (HAY QUE LLAMAR a esta funcion al hacer LogOut)
  logoutStatus() {
    // Cambiar el estado a 'AUSENTE'
    this.available_to_play = false;
    this.isUser.avalaible_to_play = 'AUSENTE';

    // Actualizar el estado en el almacenamiento local
    localStorage.setItem('userStatus', this.isUser.avalaible_to_play);

    // Emitir el nuevo estado a través del Subject
    this.statusSubject.next(this.available_to_play);

    // Llamar al servicio para actualizar el estado en la base de datos
    const userId = this.user.user_id.toString();
    this.userService.updateUserAvailability(userId, this.available_to_play).subscribe(
      () => console.log('Estado actualizado correctamente al hacer logout'),
      (error) => {
        console.error('Error al actualizar el estado al hacer logout:', error);
        // Emitir el error a través del Subject
        this.statusSubject.error(error);
      }
    );
  }
}
