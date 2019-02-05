import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private dataservice: DataService) { }

  sameProperty: any;

  ngOnInit() {
    console.log(this.dataservice.car);
    this.sameProperty = this.sameProperty.myData();
  }

}
