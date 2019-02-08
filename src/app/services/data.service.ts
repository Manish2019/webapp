import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DisplayData } from '../services/display.data';
import { Observable }  from 'rxjs/observable';
import {map} from 'rxjs/operators';
//import  'rxjs/add/operator/map';




@Injectable()
export class DataService {

  
  private _url ='https://itunes.apple.com/lookup?amgArtistId=468749,5723&entity=album&limit=5';
  //private _url ='https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  getData(): Observable <DisplayData[]>{
    return this.http.get<DisplayData[]>(this._url).pipe(map((data: any) => data.results ))

  }

 

}
