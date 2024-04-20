import { Component, Input } from '@angular/core';
import { DropdownsThreadsComponent } from '../../components/dropdowns-threads/dropdowns-threads.component';
import { CardThreadsComponent } from '../../components/card-threads/card-threads.component';
import { ThreadsService } from '../../services/threads/threads.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-threads',
  standalone: true,
  imports: [DropdownsThreadsComponent, CardThreadsComponent, HttpClientModule],
  templateUrl: './threads.component.html',
  styleUrl: './threads.component.css',
})
export class ThreadsComponent {
  public message = 'hola bienvenidos';
  public game = 'hola bienvenidos';
  public platform = 'hola bienvenidos';
  @Input() public platformTitle = 'PlayStation';

  ngOnInit() {
    // aqui meter todos los hilos ya creados ordenados por fecha
  }
}
