import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { CartComponent } from './cart.component'
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CartComponent, pathMatch: 'full'}
    ])
  ],
  declarations: [
    CartComponent
  ],
  exports:[
    CartComponent
  ]
})
export class CartModule { }
