import { NgModule } from '@angular/core';
import { ConstantsRouting } from "./shares/utilities/constants-routing";
import { Routes, RouterModule } from '@angular/router';
import { SelectivePreloadingStrategy } from "./selective-preloading-strategy";
import { CanDeactivateGuard } from "./can-deactivate-guard.service";

const appRoutes: Routes = [
  { path: ConstantsRouting.RoutingRoot.BOT, loadChildren: 'app/modules/bot-management/bot-management.module#BotManagementModule', data: { preload: true }},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategy
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }
