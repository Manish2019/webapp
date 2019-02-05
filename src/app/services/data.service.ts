import { Injectable } from '@angular/core';


@Injectable()
export class DataService {

  constructor() { }

 car = [
    'Manish', 'Singh'
  ];
  
  myData(){
    return 'Manish Singh';
  }
}
