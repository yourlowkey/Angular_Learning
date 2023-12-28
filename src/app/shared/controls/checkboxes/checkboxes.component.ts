import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { select } from '@ngrx/store';
import { ControlItem, Value } from 'src/app/models/frontend/';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxesComponent),
      multi: true,
    }
  ]
})
export class CheckboxesComponent implements OnInit, ControlValueAccessor {
  @Input()
  items!: ControlItem[];
  @Output() changed = new EventEmitter<Value[]>()
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  value!: Value[];
  isDisabled!: boolean;
  constructor() {

  }
  private propagateChange: any = () => {

  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn
  }
  registerOnTouched(fn: any): void {

  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled
  }
  writeValue(value: Value[]): void {
    this.value = value
  }
  onChanged(value: Value, event: Event): void {
    const element = event.currentTarget as HTMLInputElement
    const checked = element.checked
    console.log("checked on change", checked);

    const selected = this.getSelected(value, checked)
    this.value = selected
    this.propagateChange(selected)
    console.log("emit value checkbox", selected);

    this.changed.emit(this.getSelected(value, checked))
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

}
