import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
 
import{ AboutComponent } from './about.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AboutComponent, pathMatch: 'full'}
    ]),
  ],
  declarations: [
    AboutComponent
  ],
  exports:[
    AboutComponent
  ]
})
export class AboutModule { }
