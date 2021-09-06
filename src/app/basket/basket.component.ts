import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  basketId:number;
  constructor(private basketService:BasketService) { }

  ngOnInit(): void {
    this.fetchBasket();
  }

  fetchBasket(){
    this.basketService.fetchBasket(1).subscribe((result)=>{
      console.log(result);
    });
  }
}
