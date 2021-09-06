import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BasketService } from '../basket/basket.service';
import { ShopModel } from './shop.model';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  shop:ShopModel;
  shopId:number;
  constructor(private route:ActivatedRoute,private shopService:ShopService,private basketService:BasketService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.shopId = +params['id'];
        this.fetchShop(this.shopId);
      }
    )
  }
  fetchShop(shopId:number){
    this.shopService.getShopById(shopId).subscribe(
      result=>{
        this.shop=result;
    });
  }

  addToCard(mealId:number){
    this.basketService.addItem(mealId).subscribe(()=>{
      console.log("Başarıyla eklendi");
    });
  }
}
