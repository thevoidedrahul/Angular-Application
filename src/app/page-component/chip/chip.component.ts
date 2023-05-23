import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent {
  @Input() value: string;
  @Input() valPadding: string;
  @Input() background: string;

  constructor() {
    this.value = "";
    this.valPadding = "";
    this.background = "transparent"
  }
}
