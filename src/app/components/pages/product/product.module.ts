import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
import{ ProductComponent } from './product.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: ':id', component: ProductComponent, pathMatch: 'full'}
    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProductComponent
  ],
  exports:[
    ProductComponent
  ]
})
export class ProductModule { }
