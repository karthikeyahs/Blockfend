import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyDevicesComponent } from './my-devices/my-devices.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'home', component:MainNavComponent,
    children:[
      {path:'', redirectTo:'dashboard', pathMatch:'full'},
      {path:'dashboard', component:DashboardComponent},
      {path:'myDevices', component:MyDevicesComponent},
      {path:'settings', component:SettingsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
