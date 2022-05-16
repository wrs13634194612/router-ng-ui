import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipseComponent} from "./recipse/recipse.component";
import {RecipseDetailComponent} from "./recipse/recipse-detail/recipse-detail.component";
import {RecipseEditComponent} from "./recipse/recipse-edit/recipse-edit.component";
import {RecipseStartComponent} from "./recipse/recipse-start/recipse-start.component";
import {MineComponent} from "./mine/mine.component";
import {AboutComponent} from "./about/about.component";
import {WaiterComponent} from "./waiter/waiter.component";
import {SetComponent} from "./set/set.component";
import {UserComponent} from "./user/user.component";
import {ShareManagerComponent} from "./share-manager/share-manager.component";
import {MessageComponent} from "./message/message.component";
import {AddModeComponent} from "./add-mode/add-mode.component";


const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {
    path: 'recipes', component: RecipseComponent, children: [
      {path: '', component: RecipseStartComponent},
      {path: 'id', component: RecipseDetailComponent},
      {path: 'edit', component: RecipseEditComponent}
    ]
  },
  {path: 'shopping-list', component: MineComponent},
  {path: 'about', component: AboutComponent},
  {path: 'waiter', component: WaiterComponent},
  {path: 'set', component: SetComponent},
  {path: 'share-manager', component: ShareManagerComponent},
  {path: 'user', component: UserComponent},
  {path: 'add-mode', component: AddModeComponent},
  {path: 'message', component: MessageComponent},
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
