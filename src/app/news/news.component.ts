import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private dataservice: DataService) { }

  private displaydata: Array<any> = [];

  @Input('prentData') public name;
  @Output() public childEvent = new EventEmitter();

  ngOnInit() {
    this.dataservice.getData().subscribe(data => this.displaydata = data);
  }

  fire(){
    this.childEvent.emit('Hello Wemonde!');
  }
}
