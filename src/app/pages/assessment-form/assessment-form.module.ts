import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssessmentFormRoutingModule } from './assessment-form-routing.module';
import { AssessmentFormComponent } from './assessment-form.component';


@NgModule({
  declarations: [
    AssessmentFormComponent
  ],
  imports: [
    CommonModule,
    AssessmentFormRoutingModule
  ]
})
export class AssessmentFormModule { }
