import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogOverviewExampleDialog} from '../dialog/DialogOverviewExampleDialog';
import {CacheDialog} from '../dialog/CacheDialog';


@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  constructor(
    public dialog: MatDialog
  ) {

  }


  ngOnInit(): void {
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


  cacheDialog(): void {
    const dialogRef = this.dialog.open(CacheDialog, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`几秒之后关闭弹窗：${result}`)
    });
  }

}
