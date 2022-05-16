import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  temString = '38';
  polluteString = '优';

  tableElements: string[]= ["Google", "Runoob", "Taobao"];


  constructor() { }

  ngOnInit(): void {
  }

}
