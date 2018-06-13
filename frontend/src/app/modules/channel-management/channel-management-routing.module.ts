import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChannelManagementComponent} from "./components/channel-management/channel-management.component";

const routes: Routes = [
  { path: '', component: ChannelManagementComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelManagementRoutingModule { }
