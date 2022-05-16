import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogOverviewExampleDialog} from '../dialog/DialogOverviewExampleDialog';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) {

  }

  ngOnInit(): void {
  }

  login(event: Event) {
    event.preventDefault();

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`几秒之后关闭弹窗：${result}`)
    });
  }
}
