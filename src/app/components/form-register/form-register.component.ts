import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';
import { UserService } from '../../services/user/user.service';
import { Route, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, HttpClientModule],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css',
  providers: [UserService]
})

export class FormRegisterComponent{
  userModel!:User;

  public reactiveregister:FormGroup<any> =new FormGroup({
    name:new FormControl('', Validators.required),
    email:new FormControl('', [Validators.required, Validators.email]),
    nationality:new FormControl('', Validators.required),
    password:new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
    ]),
    ps:new FormControl(false),
    xbox:new FormControl(false),
    nintendo:new FormControl(false),
    pc:new FormControl(false),
    arcade:new FormControl(false),
    disparos:new FormControl(false),
    peleas:new FormControl(false),
    aventura:new FormControl(false),
    acción:new FormControl(false),
    puzzle:new FormControl(false),
    preguntas:new FormControl(false),
    deportes:new FormControl(false),
    coches:new FormControl(false),
    rol:new FormControl(false),
    estrategia:new FormControl(false),
    realidadVirtual:new FormControl(false),
  });

  public error:string='';

  constructor(
    private readonly userService:UserService,
    private readonly router:Router
  ) {}

  registersubmit():void{
    if(this.reactiveregister.valid) {
      // Claves exclusivas para plataformas
      const platformKeys=['ps', 'xbox', 'nintendo', 'pc'];
      // Claves exclusivas para géneros
      const genreKeys=[
        'arcade',
        'disparos',
        'peleas',
        'aventura',
        'acción',
        'puzzle',
        'preguntas',
        'deportes',
        'coches',
        'rol',
        'estrategia',
        'realidadVirtual',
      ];

      // Recoger los valores de los checkboxes en arrays de strings
      const selectedPlatforms=this.getSelectedValues(platformKeys);
      const selectedGenres=this.getSelectedValues(genreKeys);

      // Crear un objeto con los datos del formulario y los arrays de strings
      const formData={
        name: this.reactiveregister.get('name')?.value,
        email: this.reactiveregister.get('email')?.value,
        nationality: this.reactiveregister.get('nationality')?.value,
        password: this.reactiveregister.get('password')?.value,
        available_to_play: false,
        platform:selectedPlatforms,
        interest:selectedGenres,
      };

      // Llamar al servicio de registro
      this.userService.register(formData).subscribe({
        next:(res) =>{
          // Simula almacenar los datos del usuario en localStorage
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('user', JSON.stringify(res.user[0]));
          console.log('Usuario registrado con éxito');
          this.router.navigate(['init']);
          window.location.reload();
          setTimeout(() => {
            location.reload()
          }, 0.5);
        },
        error:(err) =>{
          this.error=""
        },
      });
    }
  }
  public getUserFromLocalStorage():User|null{
    const userJson=localStorage.getItem('user');
    return userJson?JSON.parse(userJson) :null;
}

  // Método para recoger los valores seleccionados de los checkboxes
  private getSelectedValues(keys:string[]):string[] {
    return keys.filter((key) =>this.reactiveregister.get(key)?.value);
  }
}
