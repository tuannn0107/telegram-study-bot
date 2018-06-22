import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostManagementRoutingModule } from './post-management-routing.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PostManagementComponent } from './components/post-management/post-management.component';
import { PostManagementService } from './services/post-management.service';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  imports: [
    CommonModule,
    PostManagementRoutingModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  ],
  declarations: [PostManagementComponent],
  providers: [PostManagementService]
})
export class PostManagementModule { }
