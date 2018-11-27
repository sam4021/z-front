import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { LoadingModule } from '../../../core/loading.module'
import { UpcomingComponent } from './upcoming.component'
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: UpcomingComponent, pathMatch: 'full'}
    ]),
    LoadingModule
  ],
  declarations: [
    UpcomingComponent
  ],
  exports: [
    UpcomingComponent
  ]
})
export class UpcomingModule { }
