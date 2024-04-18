import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from '../../pages/landing/landing.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { LoginService } from '../../services/post/login/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule, LandingComponent,NavbarComponent, FooterComponent,],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})
  export class FormLoginComponent {

errorMessage: any;
findUser(_t13: HTMLInputElement,_t22: HTMLInputElement) {
throw new Error('Method not implemented.');
}

    public name: string = '';
    public password: string = '';

    constructor(
        private readonly loginService: LoginService,
        private readonly router: Router
    ) {}

    public loginUser(): void {
        const myUser: User = {
          user_id: 0,
          name: this.name,
          avatar: '',
          email: '',
          nationality: '',
          aboutMe: '',
          password: this.password,
          confirmPassword: '',
          status: false,
          platforms: [],
          genres: [],
        }
 
        };
  
    public loginSubmit(): void {
        // Llama a la función para verificar el usuario
        this.loginService.verifyUser(this.name, this.password).subscribe(
            (response: any) => {
                // Usuario verificado correctamente
                console.log(response);
                // Redirige a la página app-init
                this.router.navigate(['/app-init']);
            },
            (error: { message: any; }) => {
                console.error(error.message);
                // Muestra un mensaje reactivo en el botón (puedes implementar esto según tu estructura HTML)
            }
        );
    }

public reactiveForm: FormGroup = new FormGroup({
  name: new FormControl('',[Validators.required]),
  password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
});

  }
