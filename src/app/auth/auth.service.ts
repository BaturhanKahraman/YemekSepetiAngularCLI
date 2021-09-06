import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RegisterShopModel } from './register-shop/register-shop.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseAddress:string=environment.apiBaseAddress+"auth/";
  constructor(private http:HttpClient) { }

  registerShop(model:RegisterShopModel){
    return this.http.post(this.baseAddress + "RegisterShop",model,{responseType:"text"});
  }
}
