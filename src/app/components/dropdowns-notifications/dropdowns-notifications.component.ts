import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { LinkWithoutPageComponent } from '../link-without-page/link-without-page.component';
import { CommentService } from '../../services/comment/comment.service';
import { NotificationService } from '../../services/notification/notification.service';

@Component({
  selector: 'app-dropdowns-notifications',
  standalone: true,
  imports: [CommonModule, NavbarComponent, LinkWithoutPageComponent],
  templateUrl: './dropdowns-notifications.component.html',
  styleUrls: ['./dropdowns-notifications.component.css'],
  providers: [CommentService],
})
export class DropdownsNotificationsComponent {
  likesCount!: number;
  public messageCount!: number;
  comments_count!: number;
  reactions_count!: number;
  @Input() public linkImg: string = 'assets/icon/iconoNotificacionesR.svg';
  @Input() public optionsVisible: boolean = false;

  constructor(
    private readonly commentService: CommentService,
    private readonly notificationService: NotificationService
  ) {}

  // Método para manejar añadir un "me gusta"
  getLikes(): any {
    const userId: number = JSON.parse(
      localStorage.getItem('user') as string
    ).user_id;
    this.notificationService.showNumberReactionsUser(userId).subscribe({
      next: (response: { reactions_count: number }) => {
        this.likesCount = response.reactions_count;
        console.log(this.likesCount);
      },
      error: (error) => {
        console.log('Error getting comment count from user', error);
      },
    });
  }

  ngOnInit() {
    console.log(this.getUserPostCount());
    this.getLikes();
  }

  // Método para manejar añadir un comentario

  getUserPostCount(): void {
    const userId: number = JSON.parse(
      localStorage.getItem('user') as string
    )?.user_id;
    // Verifica que userId no sea undefined

    this.commentService.showNumberCommentsUser(userId).subscribe({
      next: (response: any) => {
        // Accede directamente a la propiedad comment_count
        this.messageCount = response.comments_count;
        console.log('Recuento de comentarios:', this.messageCount);
      },
      error: (error) => {
        console.log(
          'Error al obtener el recuento de comentarios del usuario',
          error
        );
      },
    });
  }
  toggleContent() {
    this.optionsVisible = !this.optionsVisible;
  }

  resetNotifications() {
    this.messageCount = 0;
    this.likesCount = 0;
    this.optionsVisible = !this.optionsVisible;
  }
}