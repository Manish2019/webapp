import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';


import { AppRoutingModule, routingComponets } from './app.routing.module';
import { AppComponent } from './app.component';
// import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponets,
    // CarouselComponent
  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
