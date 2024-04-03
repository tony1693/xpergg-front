import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormRegisterComponent } from '../../components/form-register/form-register.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormRegisterComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
