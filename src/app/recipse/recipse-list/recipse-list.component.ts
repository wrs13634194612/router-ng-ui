import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipse-list',
  templateUrl: './recipse-list.component.html',
  styleUrls: ['./recipse-list.component.css']
})
export class RecipseListComponent implements OnInit {

  constructor(private router: Router,private route:ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  public onDefaultRecipe(): void {
    this.router.navigate([''],{relativeTo:this.route});
  }

  public onImgRecipe(): void {
    this.router.navigate(['id'],{relativeTo:this.route});
  }

  public onNewRecipe(): void {
    this.router.navigate(['edit'],{relativeTo:this.route});
  }

}
