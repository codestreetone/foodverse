import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data(para: any) {
    var firstName = para.controls.fname.value;
    var lastName = para.controls.lname.value;
    var email = para.controls.eid.value;
    var password = para.controls.pid.value;

    console.log("First Name: ",firstName, "\nLast Name: ",lastName, "\nEmail ID: ",email, "\nPassword: ",password);

  }

}
