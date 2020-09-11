import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { EditUsersComponent } from './components/edit-users/edit-users.component';
import { DataTablesModule } from 'angular-datatables';
import { AddUsersComponent } from './components/add-users/add-users.component'


@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    EditUsersComponent,
    AddUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
