import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{ ProductCartComponent } from './product-cart.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductCartComponent
  ],
  exports:[
    ProductCartComponent
  ]
})
export class ProductCartModule { }
