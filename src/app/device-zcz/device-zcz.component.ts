import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-zcz',
  templateUrl: './device-zcz.component.html',
  styleUrls: ['./device-zcz.component.css']
})
export class DeviceZczComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  aboutBack(): void {
    history.go(-1);
  }
}
