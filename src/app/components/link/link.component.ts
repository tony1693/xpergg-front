import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLinkActive],
  templateUrl: './link.component.html',
  styleUrl: './link.component.css',
})
export class LinkComponent {
  @Input() public linkText: string = 'Home';
  @Input() public linkImg: string = 'assets/icon/icono-home-landing-nr.svg';
  @Input() public linkRouting: string = '';
  @Input() public isUser: boolean = false;
}
