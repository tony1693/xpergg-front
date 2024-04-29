import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AvatarComponent } from '../../components/avatar/avatar.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ConfirmationModalComponent } from '../../components/confirmation-modal/confirmation-modal.component';
import { User } from '../../models/user';
import { AvatarOptionsComponent } from '../../components/avatar-options/avatar-options.component';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [
    CommonModule,
    AvatarComponent,
    FormsModule,
    ReactiveFormsModule,
    ConfirmationModalComponent,
    AvatarOptionsComponent,
  ],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css',
})
export class EditProfileComponent {
  @Input() public currentAvatar: string = 'assets/avatar/Paul_2.webp';

  userModel!: User;
  constructor(private readonly userService: UserService) {}

  public reactiveregister: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    nacionality: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
    ]),
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
    realidadVirtual: new FormControl(false),
  });

  public handleSubmit(): void {
    if (this.reactiveregister.valid) {
      // Claves exclusivas para plataformas
      const platformKeys = ['ps', 'xbox', 'nintendo', 'pc'];
      // Claves exclusivas para géneros
      const genreKeys = [
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
      const selectedPlatforms = this.getSelectedValues(platformKeys);
      const selectedGenres = this.getSelectedValues(genreKeys);

      // Crear un objeto con los datos del formulario y los arrays de strings
      const formData = {
        ...this.reactiveregister.value,
        platforms: selectedPlatforms,
        genres: selectedGenres,
      };
      console.log('Datos del Formulario:', formData);
    }
  }



// ********************* edit perfil *******

// Método para recoger los valores seleccionados de los checkboxes
private getSelectedValues(keys: string[]): string[] {
  return keys.filter((key) => this.reactiveregister.get(key)?.value);
}


public confirmEdit() {
  // Aquí va el código que se ejecutará cuando el usuario haga clic en "Aceptar" en el modal.
  
  let userId: string = this.reactiveregister.get('userId')?.value;
  let imgavatar: string = this.reactiveregister.get('imgavatar')?.value;
  let name: string = this.reactiveregister.get('name')?.value;
  let email: string = this.reactiveregister.get('email')?.value;
  let nationality: string = this.reactiveregister.get('nationality')?.value;
  let about_me: string = this.reactiveregister.get('about_me')?.value;
  let password: string = this.reactiveregister.get('password')?.value;
  let available_to_play: boolean = this.reactiveregister.get('available_to_play')?.value;
  let platform: string[] = this.getSelectedValues(['ps', 'xbox', 'nintendo', 'pc']);
  let interest: string[] = this.getSelectedValues(['arcade', 'disparos', 'peleas', 'aventura', 'acción', 'puzzle', 'preguntas', 'deportes', 'coches', 'rol', 'estrategia', 'realidadVirtual']);

  this.updateUserInDatabase(userId, imgavatar, name, email, nationality, about_me, password, available_to_play, platform, interest);
}

public updateUserInDatabase(
  userId: string,
  imgavatar: string,
  name: string,
  email: string,
  nationality: string,
  about_me: string,
  password: string,
  available_to_play: boolean,
  platform: string[],
  interest: string[]
) {
  this.userService.updateUser(userId, imgavatar, name, email, nationality, about_me, password, available_to_play, platform, interest).subscribe({
    next: (data) => {
      console.log('Actualización exitosa', data);
    },
    error: (error) => {
      console.log('Ocurrió un error durante la actualización', error);
    },
  });
}

}
