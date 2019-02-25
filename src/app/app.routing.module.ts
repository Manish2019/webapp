import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NewsComponent } from './news/news.component';
import { DisplayComponent } from './display/display.component';


const AppRouting: Routes = [

{path: 'login', component: LoginComponent},
{path:'', component: CarouselComponent},
{path:'news', component: NewsComponent},
{path:'display', component: DisplayComponent}
    
]



@NgModule({
  imports: [ RouterModule.forRoot(AppRouting)],
  exports: [RouterModule],
})

export class AppRoutingModule { }

//component bind class
export const routingComponets = [ DisplayComponent, CarouselComponent, LoginComponent, NavbarComponent, NewsComponent ]