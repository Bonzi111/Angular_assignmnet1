import { Component, OnInit } from '@angular/core';
import {DynamicTableService} from '../dynamic-table.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

constructor(private myservice: DynamicTableService) { }
title = 'sampleangularproject';
value: string;
name:  string;


getValue(){
  this.value = this.myservice.getdata();
  console.log(this.value)
  }


ngOnInit() {
  this.myservice.setdata();
}
}