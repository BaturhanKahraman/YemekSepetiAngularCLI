import { NgModule } from '@angular/core';
import { OrderComponent } from './order.component';
import { SharedModule } from '../shared/shared.module';
import { OrderRoutingModule } from './order-routing.module';



@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    SharedModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
