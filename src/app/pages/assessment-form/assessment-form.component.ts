import { Component, EventEmitter, Output } from '@angular/core';
import { ControlItem, Value } from 'src/app/models';
import { AssessmentService } from 'src/app/services';
@Component({
  selector: 'app-assessment-form',
  templateUrl: './assessment-form.component.html',
  styleUrls: ['./assessment-form.component.scss']
})
export class AssessmentFormComponent {
  items!: ControlItem[];
  value!: Value[];
  kcbdmiExpressionPercent!: string;
  kcbdmiGrammarPercent!: string;
  @Output() changed = new EventEmitter<Value[]>()
  constructor(private assessmentService: AssessmentService) {
    this.items = [
      {
        label: '맥아더-베이츠 의사소통발달 평가 기록지(K-MBCDI)',
        value: 1
      },
      {
        label: '영.유아 언어발달검사 (SELSI)',
        value: 2
      },
      {
        label: '취학 전 아동의 수용언어 및 표현언어 발달 척도 (PRES)',
        value: 3
      },
    ]
  }

  onChanged(value: Value, event: Event): void {
    const element = event.currentTarget as HTMLInputElement
    const checked = element.checked
    console.log("checked on change", checked);

    const selected = this.getSelected(value, checked)
    this.value = selected
    console.log("emit value checkbox", this.changed);
    this.changed.emit(selected)
  }
  private getSelected(value: Value, checked: boolean): Value[] {
    const selected: Value[] = this.value ? [...this.value] : [];
    if (checked) {
      if (!selected.includes(value)) {
        selected.push(value)
      }
    }
    else {
      const index = selected.indexOf(value);
      selected.splice(index, 1)
      console.log("slice");
    }
    return selected
  }
  isChecked(value: Value): boolean {
    console.log("checked", this.value && this.value.includes(value));
    return this.value && this.value.includes(value)
  }
  onBlurKbcdmiExpresstionScore(value: number): void {
    this.kcbdmiExpressionPercent = this.assessmentService.getKmbcdiExpressionPercent(value)
  }
  onBlurKbcdmiGrammarScore(value: number): void {
    this.kcbdmiGrammarPercent = this.assessmentService.getKmbcdiGrammarPercent(value)
  }
}
