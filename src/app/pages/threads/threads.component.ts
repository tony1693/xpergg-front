import { Component } from '@angular/core';
import { DropdownsThreadsComponent } from '../../components/dropdowns-threads/dropdowns-threads.component';
import { CardThreadsComponent } from '../../components/card-threads/card-threads.component';

@Component({
  selector: 'app-threads',
  standalone: true,
  imports: [DropdownsThreadsComponent , CardThreadsComponent],
  templateUrl: './threads.component.html',
  styleUrl: './threads.component.css'
})
export class ThreadsComponent {
 public message = 'hola bienvenidos'
 public game = 'hola bienvenidos'
 public platform = 'hola bienvenidos'

}
