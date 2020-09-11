import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { EditUsersComponent } from './components/edit-users/edit-users.component';
import { AddUsersComponent } from './components/add-users/add-users.component';

const routes: Routes = [
  {
    path: "users/edit/:id",
    component: EditUsersComponent
  },
  {
    path:"users/agregar",
    component: AddUsersComponent
  },
  {
    path:'users',
    component: ListUsersComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/users"
  },
  {
    path: "**",
    redirectTo: "/users"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
