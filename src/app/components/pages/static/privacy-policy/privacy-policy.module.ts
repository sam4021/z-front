import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
 
import{ PrivacyPolicyComponent } from './privacy-policy.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PrivacyPolicyComponent, pathMatch: 'full'}
    ]),
  ],
  declarations: [
    PrivacyPolicyComponent
  ],
  exports:[
    PrivacyPolicyComponent
  ]
})
export class PrivacyPolicyModule { }
