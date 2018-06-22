import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostManagementComponent} from "./components/post-management/post-management.component";

const routes: Routes = [
  { path: 'post', component: PostManagementComponent },
  { path: '', redirectTo: '/post', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostManagementRoutingModule { }
