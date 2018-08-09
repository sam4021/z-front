import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { BlogsComponent } from './blogs.component'


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: BlogsComponent, pathMatch: 'full'}
    ])
  ],
  declarations: [
    BlogsComponent
  ],
  exports:[
    BlogsComponent
  ]
})
export class BlogsModule { }
