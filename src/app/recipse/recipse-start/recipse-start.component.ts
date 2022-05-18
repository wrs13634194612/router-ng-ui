import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipse-start',
  templateUrl: './recipse-start.component.html',
  styleUrls: ['./recipse-start.component.css']
})
export class RecipseStartComponent implements OnInit {
  tableElements: string[]= ["Google", "Runoob", "Taobao"];

  constructor() { }

  ngOnInit(): void {
  }

}
