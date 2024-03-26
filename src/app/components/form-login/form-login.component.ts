import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})
export class FormLoginComponent {

public reactiveForm: FormGroup = new FormGroup({
  name: new FormControl('',[Validators.required]),
  password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
});

public loginSubmit(): void {
  console.log(this.reactiveForm.value)
  console.log(this.reactiveForm)
}

}
