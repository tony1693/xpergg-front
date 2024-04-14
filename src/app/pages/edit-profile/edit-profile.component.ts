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

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [
    CommonModule,
    AvatarComponent,
    FormsModule,
    ReactiveFormsModule,
    ConfirmationModalComponent,
  ],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css',
})
export class EditProfileComponent {
  @Input() public currentAvatar: string = 'assets/avatar/Paul_2.webp';

  userModel!: User;

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

  // Método para recoger los valores seleccionados de los checkboxes
  private getSelectedValues(keys: string[]): string[] {
    return keys.filter((key) => this.reactiveregister.get(key)?.value);
  }

  // Funcion para cambiar avatar //

  avatars = [
    { avatar_Id: 1, src: 'assets/avatar/call_of_duty-2.jpg' },
    { avatar_Id: 2, src: 'assets/avatar/call-duty.webp' },
    { avatar_Id: 3, src: 'assets/avatar/fall_guys.png' },
    { avatar_Id: 4, src: 'assets/avatar/fortnite-1.jpg' },
    { avatar_Id: 5, src: 'assets/avatar/fortnite-2.jpg' },
    { avatar_Id: 6, src: 'assets/avatar/fortnite-3.jpg' },
    { avatar_Id: 7, src: 'assets/avatar/god_of_war.jpg' },
    { avatar_Id: 8, src: 'assets/avatar/gtaV_girl-2.webp' },
    { avatar_Id: 9, src: 'assets/avatar/gtaV.jpg' },
    { avatar_Id: 10, src: 'assets/avatar/lol.png' },
    { avatar_Id: 11, src: 'assets/avatar/Paul_2.webp' },
    { avatar_Id: 12, src: 'assets/avatar/prince-of-persia.jpg' },
    { avatar_Id: 13, src: 'assets/avatar/red_dead.png' },
    { avatar_Id: 14, src: 'assets/avatar/Tekken_jim.jpg' },
  ];
}
