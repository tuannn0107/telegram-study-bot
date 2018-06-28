import { NgModule } from '@angular/core';
import { ConstantsRouting } from "./shares/utilities/constants-routing";
import { Routes, RouterModule } from '@angular/router';
import { SelectivePreloadingStrategy } from "./selective-preloading-strategy";
import { CanDeactivateGuard } from "./can-deactivate-guard.service";

const appRoutes: Routes = [
  { path: ConstantsRouting.RoutingRoot.POST, loadChildren: 'app/modules/post-management/post-management.module#PostManagementModule'},
  { path: ConstantsRouting.RoutingRoot.BOT, loadChildren: 'app/modules/bot-management/bot-management.module#BotManagementModule'},
  { path: '', redirectTo: '/post-management', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
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
