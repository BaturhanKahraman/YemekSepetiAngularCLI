import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OrderModel } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseAddress:string=environment.apiBaseAddress+"orders/";
  constructor(private http:HttpClient) {}

  giveOrder(order:OrderModel){
    return this.http.post(this.baseAddress+"add",order);
  }
}
