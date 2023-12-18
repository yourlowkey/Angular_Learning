import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {
  form: FormGroup = new FormGroup({
  })
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.form = this.fb.group({ input: [''] })
  }
  onPatchValue(): void {
    this.form.patchValue({ input: this.form.value.input })
    console.log("this form patch", this.form.value.input);

  }
  onSubmit(): void {
    console.log("submit");

  }
}
