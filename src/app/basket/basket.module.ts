import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';
import { AddBasketItemComponent } from './add-basket-item/add-basket-item.component';
import { DecreaseBasketItemComponent } from './decrease-basket-item/decrease-basket-item.component';



@NgModule({
  declarations: [
    BasketComponent,
    AddBasketItemComponent,
    DecreaseBasketItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BasketModule { }
