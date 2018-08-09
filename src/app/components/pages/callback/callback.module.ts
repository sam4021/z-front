import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { LoadingModule } from '../../../core/loading.module'

import { CallbackComponent } from './callback.component'
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CallbackComponent, pathMatch: 'full'}
    ]),
    LoadingModule
  ],
  declarations: [
    CallbackComponent
  ],
  exports:[
    CallbackComponent
  ]
})
export class CallbackModule { }
