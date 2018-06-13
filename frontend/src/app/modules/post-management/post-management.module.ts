import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostManagementRoutingModule } from './post-management-routing.module';
import { PostManagementComponent } from './components/post-management/post-management.component';
import { PostManagementService } from './services/post-management.service';

@NgModule({
  imports: [
    CommonModule,
    PostManagementRoutingModule
  ],
  declarations: [PostManagementComponent],
  providers: [PostManagementService]
})
export class PostManagementModule { }
