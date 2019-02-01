import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-carousel]',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  items: Array<any> = [];
  constructor() {

  this.items = [
    {name:'assets/images/banner.jpg'},
    {name:'assets/images/banner.jpg'}
  ];

   }

  ngOnInit() {
  }

}
