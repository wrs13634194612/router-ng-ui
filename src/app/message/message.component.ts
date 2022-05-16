import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  tableElements: string[]= ["Google", "Runoob", "Taobao"];


  constructor() {


  }

  ngOnInit(): void {
  }

  aboutBack(): void {
    history.go(-1);
  }
}
