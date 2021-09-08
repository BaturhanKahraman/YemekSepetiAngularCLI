import { NgModule } from '@angular/core';
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
