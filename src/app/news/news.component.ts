import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private dataservice: DataService) { }

  private displaydata: Array<any> = [];


  ngOnInit() {
    this.dataservice.getData().subscribe(data => this.displaydata = data);
  }

}
