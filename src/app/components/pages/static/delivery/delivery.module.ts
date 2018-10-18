import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
 
import{ DeliveryComponent } from './delivery.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DeliveryComponent, pathMatch: 'full'}
    ]),
  ],
  declarations: [
    DeliveryComponent
  ],
  exports:[
    DeliveryComponent
  ]
})
export class DeliveryModule { }
