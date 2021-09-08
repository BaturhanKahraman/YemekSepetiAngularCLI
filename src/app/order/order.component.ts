import { Component, OnInit } from '@angular/core';
import { BasketItemModel } from '../basket/basket-item.model';
import { BasketService } from '../basket/basket.service';
import { OrderModel } from './order.model';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  basketItems:BasketItemModel[];
  basketId:number;
  constructor(private orderService:OrderService,private basketService:BasketService) { }

  ngOnInit(): void {
    this.getItems();
  }
  getItems(){
    this.basketService.fetchBasket(1).subscribe(result=>{
      this.basketItems=result.basketItems;
      this.basketId=result.id;
      console.log(result);
      console.log(this.basketItems);
    },()=>{
      console.log("Hata ");
      
    });
  }
  giveOrder(){
    let order = new OrderModel();
    order.address="deneme";
    order.basketItems=this.basketItems;
    order.note="iyi bir not";
    order.userId=1;
    this.orderService.giveOrder(order).subscribe(()=>{
      console.log("Başarılı");
    })
  }
}
