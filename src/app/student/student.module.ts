import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentCountComponent } from '../student-count/student-count.component';
import { StudentListComponent } from '../student-list/student-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StudentCountComponent,
    StudentListComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  bootstrap: [StudentListComponent]
})
export class StudentModule { }
