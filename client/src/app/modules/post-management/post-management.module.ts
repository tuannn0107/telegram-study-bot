import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostManagementRoutingModule } from './post-management-routing.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PostManagementComponent } from './components/post-management/post-management.component';
import { PostManagementService } from './services/post-management.service';
import {DataTablesModule} from "angular-datatables";
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';


@NgModule({
  imports: [
    CommonModule,
    MatPaginatorModule,
    DataTablesModule,
    PostManagementRoutingModule
  ],
  declarations: [PostManagementComponent, PostDetailComponent, PostEditComponent],
  providers: [PostManagementService]
})
export class PostManagementModule { }
