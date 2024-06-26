import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AvatarComponent } from '../../components/avatar/avatar.component';
import {
  FormBuilder,
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
import { ConfirmPasswordComponent } from '../../components/confirm-password/confirm-password.component';
import { MatDialog } from '@angular/material/dialog';
import { error } from 'jquery';
import { RouterLink } from '@angular/router';

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
    ConfirmPasswordComponent,
    RouterLink
  ],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css',
})
export class EditProfileComponent {
  @Input() public currentAvatar: string = '';

  userModel!: User;
  // Método para recoger los valores seleccionados de los checkboxes
  private getSelectedValues(keys: string[]): string[] {
    return keys.filter((key) => this.reactiveregister.get(key)?.value);
  }


  constructor(
    private readonly userService: UserService,
  ) {
    const userDataString = localStorage.getItem('user');     
    const userData = userDataString ? JSON.parse(userDataString) : null;     
    const userId = userData ? userData.user_id : '';     
    localStorage.setItem('userId', userId);     
    console.log(userId);
   
    this.currentAvatar = localStorage.getItem('avatar') as string;
  }

  public reactiveregister: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    nationality: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
    ]),
    about_me: new FormControl('', Validators.required),
    ps: new FormControl(false),
    xbox: new FormControl(false),
    nintendo: new FormControl(false),
    pc: new FormControl(false),
    arcade: new FormControl(false),
    disparos: new FormControl(false),
    peleas: new FormControl(false),
    aventuras: new FormControl(false),
    accion: new FormControl(false),
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
        'aventuras',
        'accion',
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

  public confirmEdit() {
    // Obtén el objeto de usuario del localStorage
    let user = JSON.parse(localStorage.getItem('user') ?? '{}');

    // Obtén el userId del objeto de usuario
    let userId: string = user.user_id;

    // Comprueba si userId está definido
    if (!userId) {
      console.error('El ID del usuario no está definido');
      return;
    }

    let imgavatar: string = this.reactiveregister.get('imgavatar')?.value;
    let name: string = this.reactiveregister.get('name')?.value;
    let email: string = this.reactiveregister.get('email')?.value;
    let nationality: string = this.reactiveregister.get('nationality')?.value;
    let about_me: string = this.reactiveregister.get('about_me')?.value;
    let password: string = this.reactiveregister.get('password')?.value;
    let available_to_play: boolean =
      this.reactiveregister.get('available_to_play')?.value;
    let platform: string[] = this.getSelectedValues([
      'ps',
      'xbox',
      'nintendo',
      'pc',
    ]);
    let interest: string[] = this.getSelectedValues([
      'arcade',
      'disparos',
      'peleas',
      'aventuras',
      'accion',
      'puzzle',
      'preguntas',
      'deportes',
      'coches',
      'rol',
      'estrategia',
      'realidadVirtual',
    ]);

    // Llama al servicio para actualizar el usuario en la base de datos
    this.userService
      .updateUser(
        userId,
        imgavatar,
        name,
        email,
        nationality,
        about_me,
        password,
        available_to_play,
        platform,
        interest
      )
      .subscribe(
        (response) => {
          console.log('Usuario actualizado con éxito', response);

          // Actualiza la información del usuario en el localStorage
          user.imgavatar = imgavatar;
          user.name = name;
          user.email = email;
          user.nationality = nationality;
          user.about_me = about_me;
          user.password = password;
          user.available_to_play = available_to_play;
          user.platform = platform;
          user.interest = interest;

          // Guarda el objeto de usuario actualizado en el localStorage
          localStorage.setItem('user', JSON.stringify(user));
        },
        (error) => {
          console.error('Error al actualizar el usuario', error);
        }
      );

      
  }

  password =  new FormGroup({
  password: new FormControl('', [Validators.required]),
  confirmPassword: new FormControl('', [Validators.required])

})

changePassword() {
  if (this.password.valid) {
    const { password, confirmPassword } = this.password.value;
    if (password === confirmPassword) {
      const userId = localStorage.getItem('userId');
      if (userId) { // Verifica si userId no es null o undefined
        this.userService.modifyPassword(userId, password).subscribe(
          response => {
            console.log(response);
            
          },
          error => {
            console.error(error);
            
          }
        );
      } else {
        console.error('No se pudo obtener el ID del usuario');
        
      }
    } else {
      console.error('Las contraseñas no coinciden');
      
    }
  } else {
    console.error('El formulario no es válido');
    
  }
  window.location.reload()
}

}
