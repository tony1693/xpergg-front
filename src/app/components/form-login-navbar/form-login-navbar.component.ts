import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-form-login-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-login-navbar.component.html',
  styleUrl: './form-login-navbar.component.css',
})
export class FormLoginNavbarComponent {
  reactiveForm: FormGroup<any> = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
    ]),
  });

  public errorMessage: string = '';

  constructor(
    private readonly userService: UserService,
    private readonly router: Router
    
  ) {}

  ngOnInit(): void {
    this.userService
    
  }

   loginSubmit() {
    this.userService.login(this.reactiveForm.value).subscribe(
      {
        next: (res) => {
          localStorage.setItem('isLoggedIn', 'true')
          localStorage.setItem('user', JSON.stringify(res.user[0]))
          this.router.navigate(['init']) 
          setTimeout(()=>
            {location.reload();},1
          )
          

        },
        error: (err) => {
          this.errorMessage = 'Usuario o contraseña  "INCORRECTOS".';
        }
      }
    )

  }
}






// import { CommonModule } from "@angular/common";
// import { HttpClientModule } from "@angular/common/http";
// import { Component } from "@angular/core";
// import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
// import { Router } from "@angular/router";
// import { LandingComponent } from "../../pages/landing/landing.component";
// import { UserService } from "../../services/user/user.service";
// import { FooterComponent } from "../footer/footer.component";
// import { NavbarComponent } from "../navbar/navbar.component";
// import { User } from "../../models/user";
// import { JSDocComment } from "@angular/compiler";

// @Component({
//   selector: 'app-form-login-navbar',
//   standalone: true,
//   imports: [CommonModule, FormsModule, ReactiveFormsModule],
//   templateUrl: './form-login-navbar.component.html',
//   styleUrl: './form-login-navbar.component.css',
// })
// export class FormLoginNavbarComponent {
//   reactiveForm: FormGroup<any> = new FormGroup({
//     name: new FormControl('', [Validators.required]),
//     password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
//   });

//   public name: string = '';
//   public password: string = '';
//   public errorMessage: string = '';

//   constructor(
//     private readonly userService: UserService,
//     private readonly router: Router
//   ) { }
//   loginSubmit() {
//     this.userService.login(this.reactiveForm.value).subscribe(
//       {
//         next: (res) => {
//           localStorage.setItem('isLoggedIn', 'true')
//           localStorage.setItem('user', JSON.stringify(res.user[0]))
//           this.router.navigate(['init'])
//         },
//         error: (err) => {
//           this.errorMessage = 'Usuario o contraseña  "INCORRECTOS".';
//         }
//       }
//     )

//   }


//   public getUserFromLocalStorage(): User | null {
//     const userJson = localStorage.getItem('user');
//     return userJson ? JSON.parse(userJson) : null;
//   }
// }

