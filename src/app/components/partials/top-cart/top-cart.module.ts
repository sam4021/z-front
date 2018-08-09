import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopCartComponent } from './top-cart.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TopCartComponent
  ],
  exports:[
    TopCartComponent
  ]
})
export class TopCartModule { }
