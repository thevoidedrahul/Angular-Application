import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss']
})
export class FormDialogComponent {
  formGroup: FormGroup;
  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  constructor(private _dialogRef: MatDialogRef<FormDialogComponent>, private formBuilder: FormBuilder) {
    this.formGroup = null as any;
    this.autosize = null as any;
    this.createForm()
  }

  closeDialog(data: any = null) {
    this._dialogRef.close(data);
  }

  get formControl() {
    return this.formGroup.controls;
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      name: ["", Validators.required],
      address: ["", Validators.required],
      invoicingCode: ["", Validators.required],
      businessUnit: ["", Validators.required],
      technicalContact: ["", Validators.required],
      furtherContact: ["", Validators.required]
    })
  }

  submitFrom() {
    if(this.formGroup.valid){
      let values = this.formGroup.value;
      this.closeDialog(values);
    }
  }
}
