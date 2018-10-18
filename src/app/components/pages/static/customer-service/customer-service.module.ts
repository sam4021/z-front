import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
 
import{ CustomerServiceComponent } from './customer-service.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CustomerServiceComponent, pathMatch: 'full'}
    ]),
  ],
  declarations: [
    CustomerServiceComponent
  ],
  exports:[
    CustomerServiceComponent
  ]
})
export class CustomerServiceModule { }
