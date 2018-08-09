import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { LoadingModule } from '../../../core/loading.module'

import { TagsComponent } from './tags.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: ':id', component: TagsComponent, pathMatch: 'full'}
    ]),
    LoadingModule
  ],
  declarations: [
    TagsComponent
  ],
  exports:[
    TagsComponent
  ]
})
export class TagsModule { }
