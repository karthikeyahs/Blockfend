import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {DataService} from '../shared/data.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public dataService: DataService) { }

  isValid;

  form: FormGroup = new FormGroup({
    fullname: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    createPassword: new FormControl('', Validators.required),
    reenterPassword: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required,Validators.email]),
    gender: new FormControl('1', Validators.required),
    country: new FormControl('0', Validators.required)
  });

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });

  initializeFormGroup(){
    this.form.setValue({
      fullname:'',
      username:'',
      createPassword:'',
      reenterPassword:'',
      email:'',
      gender:'',
      country:'0'
    });
  }
  
  initializeLoginFormGroup(){
    this.loginForm.setValue({
      username:'',
      password:''
    });
  }

  submitForm(){
    console.log(this.form.value);
    this.dataService.postData('/signup',this.form.value);
  }
}
