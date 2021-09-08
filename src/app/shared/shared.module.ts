import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';



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
    MaterialModule,
    RouterModule
  ]
})
export class SharedModule { }
