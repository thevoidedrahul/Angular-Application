import { NgModule } from '@angular/core';
import { ChipComponent } from './chip.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ChipComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    ChipComponent
  ],
})
export class ChipModule { }
