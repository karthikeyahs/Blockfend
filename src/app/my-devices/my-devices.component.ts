import { Component, OnInit } from '@angular/core';
import {DataService} from '../shared/data.service';

@Component({
  selector: 'app-my-devices',
  templateUrl: './my-devices.component.html',
  styleUrls: ['./my-devices.component.css']
})
export class MyDevicesComponent implements OnInit {
  breakpoint: number;
  transactionDetails = new transaction();
  constructor(public dataService:DataService) { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 2;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 2;
  }

  generateTransaction(recvr:string,msg:string){
    // The sender should be the username of the account user. 
    this.transactionDetails.sender='Karthikeya';
    this.transactionDetails.receiver=recvr;
    this.transactionDetails.message=msg;
    this.dataService.postData('/generate_new_transaction',this.transactionDetails);
  }
}

export class transaction{
  sender:string;
  receiver:string;
  message:string;
}
