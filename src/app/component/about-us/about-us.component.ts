import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  showDiv: number = 1

  constructor() { }

  ngOnInit(): void {
  }
  showDIV(num) {
    this.showDiv = num
  }
}
