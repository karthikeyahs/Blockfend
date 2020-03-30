import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import {NotificationService} from '../shared/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public loginDialog: MatDialog,
              public notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  openLoginDialog(){
    const loginDialogConfig = new MatDialogConfig();
    loginDialogConfig.autoFocus = true;
    loginDialogConfig.width = "60%";
    this.loginDialog.open(LoginComponent,loginDialogConfig);
  }

}
