import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder } from '@angular/forms';
import { FormSuccessComponent } from './form-success.component';

@NgModule({
  declarations: [
    FormSuccessComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  providers: [
    FormBuilder
  ],
  exports: [
    FormSuccessComponent
  ],
})
export class FormSuccessModule { }
