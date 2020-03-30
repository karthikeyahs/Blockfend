import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullname: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    createPassword: new FormControl('', Validators.required),
    reenterPassword: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required,Validators.email]),
    gender: new FormControl('1', Validators.required),
    country: new FormControl('0', Validators.required)
  });

  loginForm: FormGroup = new FormGroup({
    $key: new FormControl(null),
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });

  initializeFormGroup(){
    this.form.setValue({
      $key:null,
      fullname:'',
      username:'',
      createPassword:'',
      reenterPassword:'',
      email:'',
      gender:'1',
      country:'0'
    });
  }
  
  initializeLoginFormGroup(){
    this.loginForm.setValue({
      $key:null,
      username:'',
      password:''
    });
  }
}
