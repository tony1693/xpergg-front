import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
import { JSDocComment } from '@angular/compiler';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})


export class FormLoginComponent { 
  reactiveForm:FormGroup<any>=new FormGroup([
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  ]);

  public name: string = '';
  public password: string = '';
  public errorMessage: string = '';

  constructor(
  private readonly UserService: UserService,
  private readonly router: Router
  ){}   

  loginSubmit(){
    console.log("Hola");
    
  }

  public getUserFromLocalStorage(): User | null {
    const userJson = localStorage.getItem('user');
    return userJson ? JSON.parse(userJson) : null;
  }

}
