import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CarouselComponent } from './carousel/carousel.component';

const AppRouting: Routes = [

{path:'carousel', component: CarouselComponent}
    
]



@NgModule({
  imports: [ RouterModule.forRoot(AppRouting)],
  exports: [RouterModule],
})

export class AppRoutingModule { }

export const routingComponets = [ CarouselComponent]