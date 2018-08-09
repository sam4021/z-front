import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { LoadingModule } from '../../../core/loading.module'

import { OffersComponent } from './offers.component'


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: OffersComponent, pathMatch: 'full'}
    ]),
    LoadingModule
  ],
  declarations: [
    OffersComponent
  ],
  exports:[
    OffersComponent
  ]
})
export class OffersModule { }
