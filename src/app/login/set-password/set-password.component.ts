import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  aboutBack():void{
    history.go(-1);
  }
}