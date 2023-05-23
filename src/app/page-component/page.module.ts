import { NgModule } from '@angular/core';
import { PageComponent } from './page-component';
import { PageRoutingModule } from './page.routing';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ChipModule } from './chip';
import { FormDialogModule } from './form-dialog';
import { FormSuccessModule } from './success-dialog';

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    ChipModule,
    MatIconModule,
    MatDialogModule,
    PageRoutingModule,
    FormDialogModule,
    FormSuccessModule
  ],
  providers: [],
})
export class PageModule { }
