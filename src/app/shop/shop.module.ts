import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    ShopRoutingModule,
    SharedModule
  ]
})
export class ShopModule { }
