import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  reportForm: FormGroup;
  reportedByCtrl: FormControl;
  summaryCtrl: FormControl;
  descriptionCtrl: FormControl;
  isSubmitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.reportedByCtrl = this.fb.control('', Validators.required);
    this.summaryCtrl = this.fb.control('', Validators.required);
    this.descriptionCtrl = this.fb.control('', Validators.required);

    this.reportForm = this.fb.group({
      reportedBy: this.reportedByCtrl,
      summary: this.summaryCtrl,
      description: this.descriptionCtrl
    });
  }

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
}
