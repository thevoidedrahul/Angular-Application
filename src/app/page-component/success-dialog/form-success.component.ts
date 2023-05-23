import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, Input, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'form-success',
  templateUrl: './form-success.component.html',
  styleUrls: ['./form-success.component.scss']
})
export class FormSuccessComponent {
  public companyInfo: CompanyInfo;

  constructor(private _dialogRef: MatDialogRef<FormSuccessComponent>, @Inject(MAT_DIALOG_DATA) data: CompanyInfo) {
    this.companyInfo = data;
  }

  closeDialog(data: any = null) {
    this._dialogRef.close(data);
  }
}

interface CompanyInfo {
  name: string,
  address: string,
  invoicingCode: string,
  businessUnit: string,
  technicalContact: string,
  furtherContact: string
}
