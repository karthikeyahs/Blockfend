import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import {MatDialogRef} from '@angular/material/dialog';
import {NotificationService} from '../shared/notification.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient,HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginService: UserService,
              public loginDialogRef: MatDialogRef<LoginComponent>,
              public notificationService: NotificationService,
              private router: Router,
              public http: HttpClient) { }

  ngOnInit(): void {
    this.loginService.initializeLoginFormGroup();
  }

  onLoginSubmit(){
    
  }

  onClose(){
    this.loginService.loginForm.reset();
    this.loginService.initializeLoginFormGroup();
    this.loginDialogRef.close();
  }

  login(){
    if(this.loginService.loginForm.valid){
      this.http.post('/signin',this.loginService.loginForm.value).subscribe(
        (response) => {
          console.log(response.toString());
          if(response.toString()=='failed'){
            this.notificationService.openSnackBar("Enter correct username and password",null,'warn');
            this.router.navigate(['/']);
          }
          else{
            this.notificationService.openSnackBar(":: Login Successful",null,'ok');
            this.router.navigate(['/home']);
          }
          this.loginService.loginForm.reset();
          this.loginService.initializeLoginFormGroup();
          this.onClose();
        },
        (error) => console.log(error)
      )
    }
  }

}
