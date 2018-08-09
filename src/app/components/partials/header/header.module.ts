import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { HeaderComponent } from './header.component'
import { TopCartModule } from '../top-cart/top-cart.module';
import { TopSearchModule } from '../top-search/top-search.module';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TopCartModule,
    TopSearchModule,
    MenuModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }
