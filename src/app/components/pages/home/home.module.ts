import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { HomeComponent } from './home.component'
import { LoadingModule } from '../../../core/loading.module'
import { TopSearchModule } from '../../partials/top-search/top-search.module'
import { HomeMenuModule } from '../../partials/home-menu/home-menu.module'
import { MainSliderModule } from '../../partials/main-slider/main-slider.module'
import { HomeCategoryModule } from '../../partials/home-category/home-category.module'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent, pathMatch: 'full'}
    ]),
    LoadingModule,
    TopSearchModule,
    HomeMenuModule,
    MainSliderModule,
    HomeCategoryModule
  ],
  declarations: [
    HomeComponent
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
