import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { HomeCategoryComponent } from './home-category.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HomeCategoryComponent
  ],
  exports:[
    HomeCategoryComponent
  ]
})
export class HomeCategoryModule { }
