import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {DataService} from '../shared/data.service';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public dataService: DataService) { }

  matcher = new MyErrorStateMatcher();

  form: FormGroup = new FormGroup({
    fullname: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    createPassword: new FormControl('', Validators.required),
    reenterPassword: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required,Validators.email]),
    gender: new FormControl('1', Validators.required),
    country: new FormControl('0', Validators.required)
  },this.checkPasswords);

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
    this.dataService.postData('/signupfomr',this.form.value);
  }

  checkPasswords(form: FormGroup) {
    let pass = form.controls.createPassword.value;
    let confirmPass = form.controls.reenterPassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }
}
