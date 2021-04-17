import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {

  showDiv: number = 2




  constructor() { }

  ngOnInit(): void {
  }
  showDIV(num) {
    this.showDiv = num
  }
}
