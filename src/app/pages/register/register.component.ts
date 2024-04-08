import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormRegisterComponent } from '../../components/form-register/form-register.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormRegisterComponent, NavbarComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
