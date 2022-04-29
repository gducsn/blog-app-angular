import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  onOffButton: boolean = false;



  constructor() { }

  ngOnInit(): void {
  }
  changeValue() {
    if(this.onOffButton == false) {
      this.onOffButton = true;
    } else {
      this.onOffButton = false;
    }
  }

}
