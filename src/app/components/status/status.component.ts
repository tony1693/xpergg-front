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
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  @Input() user!: User;
  isAvailable = true;
  isUser = { status: 'DISPONIBLE' };

  // Crea un Subject para manejar el estado
  private statusSubject = new Subject<boolean>();

  constructor(private userService: UserService) {}

  ngOnInit() {
    const storedStatus = localStorage.getItem('userStatus');
    if (storedStatus) {
      this.isUser.status = storedStatus;
      this.isAvailable = storedStatus === 'DISPONIBLE';
    }
  }

  toggleStatus() {
    this.isAvailable = !this.isAvailable;
    this.isUser.status = this.isAvailable ? 'DISPONIBLE' : 'AUSENTE';

    // Actualizar el estado en el local storage
    localStorage.setItem('userStatus', this.isUser.status);

    // Emitir el nuevo estado a través del Subject
    this.statusSubject.next(this.isAvailable);

    // Llamar al servicio para actualizar el estado en la base de datos
    const userId = this.user.user_id.toString();
    this.userService.updateUserAvailability(userId, this.isAvailable)
      .subscribe(
        () => console.log('Estado actualizado correctamente'),
        (error) => {
          console.error('Error al actualizar el estado:', error);
          // Emitir el error a través del Subject
          this.statusSubject.error(error);
        }
      );
  }

  // Método público para suscribirse al estado
  getStatusObservable(): Observable<boolean> {
    return this.statusSubject.asObservable();
  }
}

