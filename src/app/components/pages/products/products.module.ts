import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { LoadingModule } from '../../../core/loading.module'

import { ProductsComponent } from './products.component'
import { BrandCategoryComponent } from './brand-category/brand-category.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: ':category', component: ProductsComponent, pathMatch: 'full'},
      { path: ':category/:brand', component: BrandCategoryComponent, pathMatch: 'full'}
    ]),
    LoadingModule
  ],
  declarations: [
    ProductsComponent,
    BrandCategoryComponent
  ],
  exports: [
    ProductsComponent,
    BrandCategoryComponent
  ]
})
export class ProductsModule { }
