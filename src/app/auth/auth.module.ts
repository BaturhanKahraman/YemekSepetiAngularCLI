import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterShopComponent } from './register-shop/register-shop.component';
import { ProfilePageComponent } from '../customer/profile-page/profile-page.component';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RegisterShopComponent,
    ProfilePageComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,AuthRoutingModule
  ]
})
export class AuthModule { }
