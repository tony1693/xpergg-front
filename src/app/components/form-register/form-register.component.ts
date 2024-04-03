import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { User } from '../../models/user';


@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [CommonModule ,ReactiveFormsModule],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css'
})



export class FormRegisterComponent {

  userModel!: User ; 


  public reactiveregister: FormGroup = new FormGroup({

    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    nacionality: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    ps: new FormControl(false),
    xbox: new FormControl(false),
    nintendo: new FormControl(false),
    pc: new FormControl(false),
    arcade: new FormControl(false),
    disparos: new FormControl(false),
    peleas: new FormControl(false),
    aventura: new FormControl(false),
    acción: new FormControl(false),
    puzzle: new FormControl(false),
    preguntas: new FormControl(false),
    deportes: new FormControl(false),
    coches: new FormControl(false),
    rol: new FormControl(false),
    estrategia: new FormControl(false),
    realidadVirtual: new FormControl(false)

  }, 
  
  );

  public handleSubmit(): void {
    if (this.reactiveregister.valid) {
      // Claves exclusivas para plataformas
      const platformKeys = ['ps', 'xbox', 'nintendo', 'pc'];
      // Claves exclusivas para géneros
      const genreKeys = ['arcade','disparos', 'peleas', 'aventura', 'acción', 'puzzle', 'preguntas', 'deportes', 'coches', 'rol', 'estrategia', 'realidadVirtual'];
  
      // Recoger los valores de los checkboxes en arrays de strings
      const selectedPlatforms = this.getSelectedValues(platformKeys);
      const selectedGenres = this.getSelectedValues(genreKeys);
  
      // Crear un objeto con los datos del formulario y los arrays de strings
      const formData = {
        ...this.reactiveregister.value,
        platforms: selectedPlatforms,
        genres: selectedGenres
      };
      console.log('Datos del Formulario:', formData);
    }
  }

  // Método para recoger los valores seleccionados de los checkboxes
  private getSelectedValues(keys: string[]): string[] {
    return keys.filter(key => this.reactiveregister.get(key)?.value);
  }
}
