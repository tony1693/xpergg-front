import { Component } from '@angular/core';
import { FormLoginComponent } from '../form-login/form-login.component';

@Component({
  selector: 'app-login-button',
  standalone: true,
  imports: [FormLoginComponent],
  templateUrl: './login-button.component.html',
  styleUrl: './login-button.component.css'
})
export class LoginButtonComponent {

}
