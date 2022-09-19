import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  img2: any = "../assets/images/pic1.png";
  img3: any = "../assets/images/pic2.jpg";
  img1: any = "../assets/images/pic3.png";


  constructor() { }

  ngOnInit(): void {
  }

}
