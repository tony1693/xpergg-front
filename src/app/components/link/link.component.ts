import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './link.component.html',
  styleUrl: './link.component.css',
})
export class LinkComponent {
  @Input() public linkText: string = 'Home';
  @Input() public linkImg: string = 'assets/icon/icono-home-landing-nr.svg';
  @Input() public linkRouting: string = '';
}
