import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CheckoutComponent } from './checkout.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CheckoutComponent, pathMatch: 'full'}
    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CheckoutComponent
  ],
  exports:[
    CheckoutComponent
  ]
})
export class CheckoutModule { }
