import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  isSubmitted = false;

  reportForm = this.fb.group({
    reportedBy: ['', Validators.required],
    summary: ['', Validators.required],
    description: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  handleSubmit() {
    console.log(this.reportForm.value);
  }

  setSubmitted() {
    setTimeout(
      () => {
        this.isSubmitted = true;
      }, 500
    );
  }

  get reportedBy() {
    return this.reportForm.get('reportedBy');
  }

  get summary() {
    return this.reportForm.get('summary');
  }

  get description() {
    return this.reportForm.get('description');
  }
}
