import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponets } from './app.routing.module';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { PostService } from './services/post.service';



@NgModule({
  declarations: [
    AppComponent,
    routingComponets

  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule,
    AppRoutingModule,
    HttpClientModule
  ],

  bootstrap: [AppComponent],

  providers: [DataService, PostService],



})
export class AppModule { }
