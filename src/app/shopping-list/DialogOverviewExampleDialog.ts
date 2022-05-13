import {Component, OnInit} from "@angular/core";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'login-dialog',
  templateUrl: 'login-dialog.html',
})
export class DialogOverviewExampleDialog implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>) {
  }

  onNoClick(): void {
    console.log(`几秒之后关闭弹2窗`)
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
