import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentService } from './assessment.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AssessmentModule {
  static forRoot(): ModuleWithProviders<AssessmentModule> {
    return {
      ngModule: AssessmentModule,
      providers: [
        AssessmentService
      ]
    }
  }
}
