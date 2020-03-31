import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  countries = [
    {viewValue: 'India'},
    {viewValue: 'USA'},
    {viewValue: 'UK'},
    {viewValue: 'Australia'},
    {viewValue: 'Uganda'},
  ];

  constructor(public userService: UserService,
              public notificationService: NotificationService) { }

  ngOnInit(): void {
    this.userService.initializeFormGroup();
  }

  onClear(){
    this.userService.form.reset();
    this.userService.initializeFormGroup();
  }

  onSignupSubmit(){
    
  }
  
  submitSignupForm(){
    if(this.userService.form.valid){
      this.userService.submitForm();
      this.userService.form.reset();
      this.userService.initializeFormGroup();
      this.notificationService.openSnackBar(":: Sign Up Successful",null,'ok');
    }
  }

}
