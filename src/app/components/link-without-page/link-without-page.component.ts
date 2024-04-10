import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-without-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './link-without-page.component.html',
  styleUrl: './link-without-page.component.css',
})
export class LinkWithoutPageComponent {
  @Input() public linkText: string = 'Home';
  @Input() public linkImg: string = 'assets/icon/icono-home-landing-nr.svg';
  @Input() public isUser: boolean = false;
}
