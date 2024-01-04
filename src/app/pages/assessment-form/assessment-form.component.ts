import { Component } from '@angular/core';
type Item = {
  label: string,
  value: number
}
@Component({
  selector: 'app-assessment-form',
  templateUrl: './assessment-form.component.html',
  styleUrls: ['./assessment-form.component.scss']
})
export class AssessmentFormComponent {
  items!: Item[];
  constructor() {
    this.items = [
      {
        label: 'MacArthur - Bates Communication Development Assessment Record (K-MBCDI)',
        value: 1
      },
      {
        label: 'zero . Sequenced Language Scale for Infants ( SELSI)',
        value: 2
      },
      { label: 'Third', value: 3 },
      { label: 'Fourth', value: 4 },
      { label: 'Fifth', value: 5 }]
  }
}
