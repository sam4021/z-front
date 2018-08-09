import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { LoadingModule } from '../../../core/loading.module'

import { SearchComponent } from './search.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: ':id', component: SearchComponent, pathMatch: 'full'}
    ]),
    LoadingModule
  ],
  declarations: [
    SearchComponent
  ],
  exports:[
    SearchComponent
  ]
})
export class SearchModule { }
