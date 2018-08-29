import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import{ ProductCartComponent } from './product-cart.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    ProductCartComponent
  ],
  exports:[
    ProductCartComponent
  ]
})
export class ProductCartModule { }
