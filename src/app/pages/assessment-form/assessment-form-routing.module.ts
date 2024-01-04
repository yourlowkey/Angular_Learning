import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentFormComponent } from './assessment-form.component';

const routes: Routes = [
  {
    path: '',
    component: AssessmentFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssessmentFormRoutingModule { }
