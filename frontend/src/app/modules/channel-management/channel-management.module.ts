import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelManagementRoutingModule } from './channel-management-routing.module';
import { ChannelManagementComponent } from './components/channel-management/channel-management.component';

@NgModule({
  imports: [
    CommonModule,
    ChannelManagementRoutingModule
  ],
  declarations: [ChannelManagementComponent]
})
export class ChannelManagementModule { }
