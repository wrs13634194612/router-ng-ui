import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipseComponent} from "./recipse/recipse.component";
import {RecipseDetailComponent} from "./recipse/recipse-detail/recipse-detail.component";
import {RecipseEditComponent} from "./recipse/recipse-edit/recipse-edit.component";
import {RecipseStartComponent} from "./recipse/recipse-start/recipse-start.component";


const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {
    path: 'recipes', component: RecipseComponent, children: [
      {path: '', component: RecipseStartComponent},
      {path: 'id', component: RecipseDetailComponent},
      {path: 'edit', component: RecipseEditComponent}
    ]
  },
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'auth', component: AuthComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
