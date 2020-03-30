import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import {MatDialogRef} from '@angular/material/dialog';
import {NotificationService} from '../shared/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginService: UserService,
              public loginDialogRef: MatDialogRef<LoginComponent>,
              public notificationService: NotificationService) { }

  ngOnInit(): void {
    this.loginService.initializeLoginFormGroup();
  }

  onLoginSubmit(){
    if(this.loginService.loginForm.valid){
      this.loginService.loginForm.reset();
      this.loginService.initializeLoginFormGroup();
      this.notificationService.openSnackBar(":: Login Successful",null);
      this.onClose();
    }
  }

  onClose(){
    this.loginService.loginForm.reset();
    this.loginService.initializeLoginFormGroup();
    this.loginDialogRef.close();
  }

}
