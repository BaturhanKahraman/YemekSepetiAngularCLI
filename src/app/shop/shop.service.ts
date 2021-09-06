import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ShopModel } from './shop.model';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseAddress:string=environment.apiBaseAddress + "shop/";
  constructor(private httpService:HttpClient) { }
  getShopById(shopId:number):Observable<ShopModel>{
    return this.httpService.get<ShopModel>(this.baseAddress+"GetDetail/",{params:{id:shopId}});
  }
  
}
