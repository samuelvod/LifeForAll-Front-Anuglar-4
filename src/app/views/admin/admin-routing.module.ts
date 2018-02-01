import { NgModule } from '@angular/core';
import { Routes,
  RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {AdminComponent} from "./admin.component";
const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    data: {
      title: 'Admin'
    }
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AdminRoutingModule { }
