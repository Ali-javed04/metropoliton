import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slides = [
    {img: "assets/TruckPics1.jpg"},
    {img: "assets/TruckPics2.jpg"},
    {img: "assets/TruckPics3.jpg" },
    {img: "assets/TruckPics4.jpg"},
    {img: "assets/TruckPics5.jpeg"}

  ];
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": true,
    "infinite": true,
    "autoplaySpeed": 3000,
    "autoplay": true,
    "dotClass":'slick-dots',
    "swipeToSlide":true
};

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  driverApply() {
    this.router.navigate(['/register'])
  }

}
