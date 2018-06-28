import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BotManagementComponent } from "./components/bot-management/bot-management.component";

const botRoutes: Routes = [
  { path: '', component: BotManagementComponent }
];

@NgModule({
  imports: [RouterModule.forChild(botRoutes)],
  exports: [RouterModule]
})
export class BotManagementRoutingModule { }
