import { Component } from '@angular/core';
import { LinkComponent } from '../link/link.component';
import { FormLoginComponent } from '../form-login/form-login.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LinkComponent, FormLoginComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
