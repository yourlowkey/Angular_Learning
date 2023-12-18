import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { regex, regexErrors } from 'src/app/shared/utils';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {
  form: FormGroup = new FormGroup({
  })
  isInline!: boolean
  regexErrors = regexErrors;

  // items!: ControlItem[];
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      input: [null, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(regex.numbers)
        ]
      }],
      password: [null, {
        updateOn: 'blur', validators: [
          Validators.required
        ]
      }],
      autocomplete: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
      select: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
      checkboxes: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
      radios: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
      date: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
      dateRange: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
    });
  }
  onPatchValue(): void {
    this.form.patchValue({ input: this.form.value.input })
    console.log("this form patch", this.form.value.input);
    console.log("form object", this.form.controls);


  }
  onSubmit(): void {
    console.log("submit");

  }
  onToggleInline() {
    this.isInline = !this.isInline
  }
  onToggleDisable(): void {
    if (this.form.enabled) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  // onToggleSpinner(): void {
  //   this.showSpinner = !this.showSpinner;
  // }

  // onSuccess(): void {
  //   this.notification.success('Everything is fine!');
  // }

  // onError(): void {
  //   this.notification.error('Oops! Something is wrong');
  // }
}
