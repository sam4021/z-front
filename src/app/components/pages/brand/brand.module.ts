import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { BrandComponent } from './brand.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: ':brand', component: BrandComponent, pathMatch: 'full'}
    ]),
  ],
  declarations: [
    BrandComponent
  ],
  exports:[
    BrandComponent
  ]
})
export class BrandModule { }
