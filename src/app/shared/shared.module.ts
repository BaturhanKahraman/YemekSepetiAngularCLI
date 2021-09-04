import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports:[
    CommonModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class SharedModule { }
