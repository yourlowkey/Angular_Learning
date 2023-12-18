import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { ButtonsModule } from 'src/app/shared/buttons';
import { ControlsModule } from 'src/app/shared';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldModule } from 'src/app/shared/controls/form-field/form-field.module';

@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ButtonsModule,
    ControlsModule,
    ReactiveFormsModule,
    FormFieldModule,
  ]
})
export class SharedModule { }
