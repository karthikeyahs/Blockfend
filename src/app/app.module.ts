import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { HomeComponent } from './home/home.component';
import { MyDevicesComponent } from './my-devices/my-devices.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { UserService } from './shared/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatRadioModule} from '@angular/material/radio'; 
import {MatSelectModule} from '@angular/material/select';
import { LoginComponent } from './login/login.component'; 
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    MyDevicesComponent,
    DashboardComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent]
})
export class AppModule { }