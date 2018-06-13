import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BotManagementModule } from './modules/bot-management/bot-management.module';
import { ChannelManagementModule } from './modules/channel-management/channel-management.module';
import { AppRoutingModule } from "./app-routing.module";
import { LoginModule } from './modules/login/login.module';
import { HeaderComponent } from './shares/layouts/header/header.component';
import { FooterComponent } from './shares/layouts/footer/footer.component';
import { PostManagementModule } from './modules/post-management/post-management.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BotManagementModule,
    ChannelManagementModule,
    LoginModule,
    PostManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }