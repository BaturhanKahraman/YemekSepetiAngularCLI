import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginShopComponent } from './login-shop/login-shop.component';
import { LoginComponent } from './login/login.component';
import { RegisterShopComponent } from './register-shop/register-shop.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      {
        path: 'register',
        component: RegisterComponent,
        //resolve: [RecipesResolverService]
      },
      {
        path: 'login-shop',
        component: LoginShopComponent,
        //resolve: [RecipesResolverService]
      },
      {
        path: 'register-shop',
        component: RegisterShopComponent,
        //resolve: [RecipesResolverService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
