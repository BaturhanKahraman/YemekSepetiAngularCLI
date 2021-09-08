import { BasketItemModel } from "./basket-item.model";

export class BasketModel{
    id:number;
    basketItems:BasketItemModel[];
    totalPrice:number;
    customerId:number;
    totalQuantity:number;
}