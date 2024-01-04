import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', children: [
      {
        path: '',
        loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule),
      },
      {
        path: 'assessment-form',
        loadChildren: () => import('./pages/assessment-form/assessment-form.module').then(m => m.AssessmentFormModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
