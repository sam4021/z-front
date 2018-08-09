import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainSliderComponent } from './main-slider.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MainSliderComponent
  ],
  exports:[
    MainSliderComponent
  ]
})
export class MainSliderModule { }
