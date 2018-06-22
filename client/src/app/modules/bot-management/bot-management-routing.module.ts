import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BotManagementComponent } from "./components/bot-management/bot-management.component";

const routes: Routes = [
  { path: 'bot', component: BotManagementComponent },
  { path: '', redirectTo: 'bot-management/bot', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BotManagementRoutingModule { }
