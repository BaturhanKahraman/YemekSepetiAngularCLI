import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    SharedModule
  ],
  exports:[
    NavComponent
  ]
})
export class TemplateModule { }
