import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Observable, Subject } from 'rxjs';
import { UserService } from '../../services/user/user.service';
import { InitComponent } from '../../pages/init/init.component';
import { ProfileComponent } from '../../pages/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule, InitComponent, ProfileComponent, HttpClientModule],
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
  providers:[UserService],
})
export class StatusComponent implements OnInit {
  @Input() user!: User;
  
  isAvailable = false;
  isUser = { status: 'AUSENTE' };

  // Crea un Subject para manejar el estado
  private statusSubject = new Subject<boolean>();

  constructor(private userService: UserService) { }

  ngOnInit() {
    // Establecer el estado como 'AUSENTE' al iniciar sesión
    this.isAvailable = false;
    this.isUser.status = 'AUSENTE';

    // Actualizar el estado en el almacenamiento local
    localStorage.setItem('userStatus', this.isUser.status);

    // Emitir el nuevo estado a través del Subject
    this.statusSubject.next(this.isAvailable);
  }

  // Función para cambiar el estado de disponibilidad
  toggleStatus() {
    this.isAvailable = !this.isAvailable;
    this.isUser.status = this.isAvailable ? 'DISPONIBLE' : 'AUSENTE';

    // Actualizar el estado en el almacenamiento local
    localStorage.setItem('userStatus', this.isUser.status);

    // Emitir el nuevo estado a través del Subject
    this.statusSubject.next(this.isAvailable);

    // Llamar al servicio para actualizar el estado en la base de datos
    const userId = this.user.user_id.toString();
    this.userService.updateUserAvailability(userId, this.isAvailable).subscribe({
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
    this.getStatusObservable().subscribe((status: boolean) => {
      console.log('El estado es', status);
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
    this.isAvailable = false;
    this.isUser.status = 'AUSENTE';

    // Actualizar el estado en el almacenamiento local
    localStorage.setItem('userStatus', this.isUser.status);

    // Emitir el nuevo estado a través del Subject
    this.statusSubject.next(this.isAvailable);

    // Llamar al servicio para actualizar el estado en la base de datos
    const userId = this.user.user_id.toString();
    this.userService.updateUserAvailability(userId, this.isAvailable).subscribe(
      () => console.log('Estado actualizado correctamente al hacer logout'),
      (error) => {
        console.error('Error al actualizar el estado al hacer logout:', error);
        // Emitir el error a través del Subject
        this.statusSubject.error(error);
      }
    );
  }
}
