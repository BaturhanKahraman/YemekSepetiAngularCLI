import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddItemModel } from './add-item.model';
import { BasketModel } from './basket.model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  baseAddress :string = environment.apiBaseAddress+"basket/";

  constructor(private http:HttpClient) { }

  fetchBasket(customerId:number):Observable<BasketModel>{
    return this.http.get<BasketModel>(this.baseAddress+"GetBasket",{params:{customerId:customerId}});
  }
  addItem(mealId:number){
    let model = new AddItemModel();
    model.customerId=1,
    model.mealId=mealId;
    model.quantity=1;
    model.price=0;
    return this.http.post(this.baseAddress+"AddBasketItem",model);
  }
}
