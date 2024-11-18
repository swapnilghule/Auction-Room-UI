// src/app/register/register.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {EventService} from '../services/event.service';
import {response} from 'express';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  private userService: any;

  constructor(private fb: FormBuilder, private eventService :EventService) {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const formValues= this.registerForm.value;
      console.log('Registration successful:', this.registerForm.value);
      const userObject ={
        username: formValues.fullName,
        password: formValues.password,
        email: formValues.email,
        createdBy: 'USER'
      }

      console.log(userObject);
    //  const user = this.registerForm.value;
      this.eventService.register(userObject).subscribe(
        {
          next: (response) =>{
            console.log("Registration Successful");
          },
          error: (error)=>{
            console.log("Registration Failed");

          }
        }

      )
    }
  }
}
