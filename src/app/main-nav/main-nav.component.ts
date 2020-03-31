import { Component,OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {Router,ActivatedRoute} from '@angular/router';
import {DataService} from '../shared/data.service';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit{

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
                      activatedroute: ActivatedRoute,
                      public dataService: DataService,
                      public route: Router,
                      public notificationService: NotificationService) {}

  ngOnInit(): void{
    
  }

  onLogout(){
    this.dataService.getRequests('/logout');
    this.notificationService.openSnackBar(':: Logout Successful',null,'ok')
    this.route.navigate(['/']);
  }

}