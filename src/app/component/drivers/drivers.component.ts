import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {

  showDivs: number = 1

  constructor() { }

  ngOnInit(): void {
  }
  showDIV(num) {
    this.showDivs = num
  }
}
