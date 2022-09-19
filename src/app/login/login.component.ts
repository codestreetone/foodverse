import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data(para:any) {
    var email = para.controls.eid.value;
    var pass = para.controls.pid.value;
    console.log("Email = ",email,"\n Password = ",pass);
    
    
  }

}
