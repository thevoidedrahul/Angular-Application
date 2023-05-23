import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormDialogComponent } from './form-dialog';
import { FormSuccessComponent } from './success-dialog';

@Component({
  selector: 'page-component',
  templateUrl: './page-component.html',
  styleUrls: ['./page-component.scss']
})
export class PageComponent {

  constructor(private _dialog: MatDialog) {
  }

  openFormDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.height = 'unset';
    dialogConfig.width = '800px';

    let ref = this._dialog.open(FormDialogComponent, dialogConfig);

    ref.afterClosed().subscribe((response) => {
      if (response) {
        this.openSuccessDialog(response);
      }
    })
  }

  openSuccessDialog(data: object) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.height = 'unset';
    dialogConfig.width = '470px';
    dialogConfig.data = data;

    let ref = this._dialog.open(FormSuccessComponent, dialogConfig);

    ref.afterClosed().subscribe((response) => {
      if (response) {
        this.openFormDialog();
      }
    })
  }
}
