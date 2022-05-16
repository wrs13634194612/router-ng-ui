import {Component, OnInit} from "@angular/core";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'login-dialog',
  templateUrl: 'cache-dialog.html',
})
export class CacheDialog implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CacheDialog>) {
  }

  cacheSure(): void {
    console.log(`确定-几秒之后关闭弹2窗`)
    this.dialogRef.close();
  }

  cacheCancel(): void {
    console.log(`取消-几秒之后关闭弹2窗`)
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
