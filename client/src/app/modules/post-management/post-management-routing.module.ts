import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostManagementComponent} from "./components/post-management/post-management.component";
import {PostDetailComponent} from "./components/post-detail/post-detail.component";
import {PostEditComponent} from "./components/post-edit/post-edit.component";

const postRoutes: Routes = [
  {
    path: '',
    component: PostManagementComponent,
    children: [
      { path: 'view-post', component: PostManagementComponent, children: [ { path: ':id', component: PostDetailComponent } ] },
      { path: 'edit-post', component: PostManagementComponent, children: [ { path: ':id', component: PostEditComponent } ] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(postRoutes)],
  exports: [RouterModule]
})
export class PostManagementRoutingModule { }
