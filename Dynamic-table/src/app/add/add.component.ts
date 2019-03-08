import { Component, OnInit } from '@angular/core';
import {DynamicTableService} from '../dynamic-table.service'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  json:any;
  firstname:string;
  lastname:string;
  email:string;
  id:string;
  phonenumber:string;
  designation:string;
  dateofbirth:string;

  constructor(private myservice: DynamicTableService) { }
  
  value;

  add(){
    this.json=
    {
      "firstName":this.firstname,
      "lastName":this.lastname,
      "Email":this.email,
      "Id":this.id,
      "phoneNumber":this.phonenumber,
      "Designation":this.designation,
      "Date_of_birth":this.dateofbirth
    }
    this.value=this.myservice.getdata();
    this.value.push(this.json);
    console.log(this.value);
  }
  remove(){
    alert("data not inserted")
  }

  ngOnInit() {
  }

}
