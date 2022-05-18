import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipse-detail',
  templateUrl: './recipse-detail.component.html',
  styleUrls: ['./recipse-detail.component.css']
})
export class RecipseDetailComponent implements OnInit {
  tableElements: string[]= ["Google", "Runoob", "Tlink","Taobao"];

  constructor() { }

  ngOnInit(): void {
  }

}
