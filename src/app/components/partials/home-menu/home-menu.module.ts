import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { HomeMenuComponent } from './home-menu.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HomeMenuComponent
  ],
  exports:[
    HomeMenuComponent
  ]
})
export class HomeMenuModule { }
