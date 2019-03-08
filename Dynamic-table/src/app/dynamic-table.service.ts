import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DynamicTableService {

  constructor() { }
  
  arr = [
    {
      "firstName": "Shantanu",
      "lastName": "Rawat",
      "Email": "shantanurawat17@gmail.com",
      "Id": 500046897,
      "phoneNumber": 8218706272,
      "Designation": "software developer trainee",
      "Date_of_birth": "17-12-1998"
    },
    {
      "firstName": "Tejal",
      "lastName": "Ranjhan",
      "Email": "tr07@gmail.com",
      "Id": 500046888,
      "phoneNumber": 7055473817,
      "Designation": "software developer trainee",
      "Date_of_birth": "19-1-1996"
    },
    {
      "firstName": "Aayush",
      "lastName": "Verma",
      "Email": "a.verma@gmail.com",
      "Id": 500048460,
      "phoneNumber": 8218773817,
      "Designation": "software developer trainee",
      "Date_of_birth": "24-7-1997"
    },
    {
      "firstName": "Nikhil",
      "lastName": "Banerjee",
      "Email": "nikhil.banerjee@gmail.com",
      "Id": 500046880,
      "phoneNumber": 7055406272,
      "Designation": "software developer trainee",
      "Date_of_birth": "30-6-1997"
    },
  ]
  myArr;

  setdata() {
    this.myArr = this.arr;
  }
  getdata() {
    return this.myArr
  }
}