import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyDevicesComponent } from './my-devices/my-devices.component';


const routes: Routes = [
  {
    path:'home', component:HomeComponent, 
    data:{
      icon:'home',
      title:'Home'
    }
  },
  {
    path:'dashboard', component:DashboardComponent,
    data:{
      icon:'dashboard',
      title:'Dashboard'
    }
  },
  {
    path:'myDevices', component:MyDevicesComponent,
    data:{
      icon:'important_devices',
      title:'My Devices'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
