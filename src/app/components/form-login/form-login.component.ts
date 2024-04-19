import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { LandingComponent } from "../../pages/landing/landing.component";
import { UserService } from "../../services/user/user.service";
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { User } from "../../models/user";

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule, LandingComponent,NavbarComponent, FooterComponent],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})
export class FormLoginComponent {
  reactiveForm!: FormGroup<any>;
loginSubmit() {
throw new Error('Method not implemented.');
}
  public name: string = '';
  public password: string = '';
  public errorMessage: string = '';

  constructor(
    private readonly userService: UserService,
    private readonly router: Router
  ) {}
  public findUser(name: HTMLInputElement, password: HTMLInputElement): void {
    this.userService.verifyUser(name.value, password.value).subscribe(
      (response: User) => {
        // Usuario verificado correctamente
        console.log(response);
        // Guarda el usuario en el localStorage
        localStorage.setItem('user', JSON.stringify(response));
        // Redirige a la página app-init
        this.router.navigate(['/app-init']);
      },
      (error: { message: any; }) => {
        console.error(error.message);
        // Muestra un mensaje de error
        this.errorMessage = 'Usuario o contraseña incorrectos';
      }
    );
  }

  public getUserFromLocalStorage(): User | null {
    const userJson = localStorage.getItem('user');
    return userJson ? JSON.parse(userJson) : null;
  }
}
