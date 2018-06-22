import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BotManagementRoutingModule } from './bot-management-routing.module';
import { BotManagementComponent } from './components/bot-management/bot-management.component';

@NgModule({
  imports: [
    CommonModule,
    BotManagementRoutingModule
  ],
  declarations: [BotManagementComponent]
})
export class BotManagementModule { }
