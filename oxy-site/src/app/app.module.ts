import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuBarItemComponent } from './components/menu-bar/menu-bar-item/menu-bar-item.component';
import { MenuBarLogoComponent } from './components/menu-bar/menu-bar-logo/menu-bar-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuBarItemComponent,
    MenuBarLogoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
