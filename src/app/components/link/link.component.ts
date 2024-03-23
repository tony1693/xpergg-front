import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [],
  templateUrl: './link.component.html',
  styleUrl: './link.component.css'
})
export class LinkComponent {
  @Input() public linkText: string = "Home";
  @Input() public linkImg: string = "assets/icon/icono-home-landing-nr.svg"
}
