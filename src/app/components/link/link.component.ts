import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [],
  templateUrl: './link.component.html',
  styleUrl: './link.component.css'
})
export class LinkComponent {
  @Input() public linkText: string = "";
  @Input() public linkImg: string = "";
  @Input() public linkRouting: string = "";
}
