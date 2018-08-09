import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { FaqComponent } from './faq.component'
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: FaqComponent, pathMatch: 'full'}
    ]),
  ],
  declarations: [
    FaqComponent
  ],
  exports:[
    FaqComponent
  ]
})
export class FaqModule { }
