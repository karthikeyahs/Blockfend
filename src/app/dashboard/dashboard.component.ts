import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {DataService} from '../shared/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DashboardComponent implements OnInit {
  dataSource = new MatTableDataSource<BlockElement>();
  columnsToDisplay = ['Block', 'Timestamp'];
  expandedElement: BlockElement | null;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public dataService: DataService) { }


  ngOnInit(): void {
    this.getBlockData();
    this.dataSource.paginator = this.paginator;
  }

  getBlockData(){
    this.dataService.getRequests('/blocks').subscribe((res) => {
        console.log(res);  
      // let data = JSON.parse(res);
        this.dataSource = res as MatTableDataSource<BlockElement>;
    });
  }

}

export class BlockElement{
  _id: string;
  timestamp: string;
  description:{
    _id:string;
    transaction_hash:string;
    parent_hash:string;
    sender:string;
    receiver:string;
    timestamp:string;
    random_num:number;
    message:string;
  }  
}
