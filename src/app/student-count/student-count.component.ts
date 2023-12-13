import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-student-count',
  templateUrl: './student-count.component.html',
  styleUrl: './student-count.component.css'
})
export class StudentCountComponent {
  @Input()
  all!: number;
  @Input()
  male!: number;
  @Input()
  female!: number;
  selectedRadioButtonValue: string = 'All';
  @Output()
  countRadioButtonSelectionChanged: EventEmitter<string> =
    new EventEmitter<string>();
  onRadioButtonSelectionChange() {
    this.countRadioButtonSelectionChanged
      .emit(this.selectedRadioButtonValue);
    console.log(this.selectedRadioButtonValue);

  }
}
