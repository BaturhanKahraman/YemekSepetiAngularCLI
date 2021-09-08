import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: "", loadChildren: () => import("./home-page/home-page.module").then(m => m.HomePageModule) },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "shop",
    loadChildren: () => import("./shop/shop.module").then(m => m.ShopModule)
  },
  {
    path: "basket",
    loadChildren: () => import("./basket/basket.module").then(m => m.BasketModule)
  },
  {
    path: "order",
    loadChildren: () => import("./order/order.module").then(m => m.OrderModule)
  }
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
