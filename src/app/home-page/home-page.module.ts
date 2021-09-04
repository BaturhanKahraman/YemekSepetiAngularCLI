import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    HomePageRoutingModule,
    SharedModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
