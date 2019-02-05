import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';



const AppRouting: Routes = [

{path: 'login', component: LoginComponent},
{path:'', component: CarouselComponent}
    
]



@NgModule({
  imports: [ RouterModule.forRoot(AppRouting)],
  exports: [RouterModule],
})

export class AppRoutingModule { }

export const routingComponets = [ CarouselComponent, LoginComponent, NavbarComponent ]