import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialExampleModule } from '../material.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipseComponent } from './recipse/recipse.component';
import { RecipseStartComponent } from './recipse/recipse-start/recipse-start.component';
import { RecipseDetailComponent } from './recipse/recipse-detail/recipse-detail.component';
import { RecipseEditComponent } from './recipse/recipse-edit/recipse-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AuthComponent } from './auth/auth.component';
import { RecipseListComponent } from './recipse/recipse-list/recipse-list.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogOverviewExampleDialog} from "./dialog/DialogOverviewExampleDialog";
import { MineComponent } from './mine/mine.component';
import { AboutComponent } from './about/about.component';
import { WaiterComponent } from './waiter/waiter.component';
import { SetComponent } from './set/set.component';
import {CacheDialog} from "./dialog/CacheDialog";
import { UserComponent } from './user/user.component';
import { ShareManagerComponent } from './share-manager/share-manager.component';
import { MessageComponent } from './message/message.component';
import { AddModeComponent } from './add-mode/add-mode.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipseComponent,
    RecipseStartComponent,
    RecipseDetailComponent,
    RecipseEditComponent,
    ShoppingListComponent,
    AuthComponent,
    CacheDialog,
    DialogOverviewExampleDialog,
    RecipseListComponent,
    HeaderComponent,
    MineComponent,
    AboutComponent,
    WaiterComponent,
    SetComponent,
    UserComponent,
    ShareManagerComponent,
    MessageComponent,
    AddModeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialExampleModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
