import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {ConstantsRouting} from "./shares/utilities/constants-routing";

const routes: Routes = [
  { path: ConstantsRouting.RoutingRoot.BOT, loadChildren: './modules/bot-management/bot-management.module#BotManagementModule'},
  { path: ConstantsRouting.RoutingRoot.CHANNEL, loadChildren: './modules/channel-management/channel-management.module#ChannelManagementModule'},
  { path: ConstantsRouting.RoutingRoot.POST, loadChildren: './modules/post-management/post-management.module#PostManagementModule'},
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    // preload all modules; optionally we could
    // implement a custom preloading strategy for just some
    // of the modules (PRs welcome 😉)
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
