import { NgModule } from '@angular/core';
import { BasketComponent } from './basket.component';
import { SharedModule } from '../shared/shared.module';
import { BasketRoutingModule } from './basket-routing.module';

@NgModule({
  declarations: [
    BasketComponent,
  ],
  imports: [
    SharedModule,
    BasketRoutingModule
  ]
})
export class BasketModule { }
