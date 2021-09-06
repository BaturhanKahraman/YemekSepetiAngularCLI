import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { RegisterShopModel } from './register-shop.model';

@Component({
  selector: 'app-register-shop',
  templateUrl: './register-shop.component.html',
  styleUrls: ['./register-shop.component.css']
})
export class RegisterShopComponent implements OnInit {
  registerShopForm:FormGroup
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.initiliazeForm();
  }
  initiliazeForm(){
    this.registerShopForm = new FormGroup({
      email: new FormControl(null,[Validators.required,Validators.email,Validators.minLength(5),Validators.maxLength(110)]),
      password: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
      phone:new FormControl(null,Validators.required),
      name:new FormControl(null,Validators.required),
    });
  }

  register(){
    let model:RegisterShopModel = Object.assign(this.registerShopForm.value);
    this.authService.registerShop(model).subscribe(
      ()=>{
        this.registerShopForm.reset();
      },
      (error)=>{
        console.log(error);
      },()=>{
        console.log("completed");
      }
    );
  }
}
