import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopSearchComponent } from './top-search.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TopSearchComponent
  ],
  exports:[
    TopSearchComponent
  ]
})
export class TopSearchModule { }
