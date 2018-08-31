import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopSearchComponent } from './top-search.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    TopSearchComponent
  ],
  exports:[
    TopSearchComponent
  ]
})
export class TopSearchModule { }
