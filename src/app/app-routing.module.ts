import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtectLayoutComponent } from 'src/styles/layout/protected-layout/protect-layout/protect-layout.component';
const routes: Routes = [
  {
    path: '',
    component: ProtectLayoutComponent,
    children: [
      {
        path: 'home-page',
        loadChildren: () =>
          import('./pages/homepage/homepage.module').then(
            (m) => m.HomepageModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
