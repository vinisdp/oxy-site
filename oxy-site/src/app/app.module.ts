import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuBarItemComponent } from './components/menu-bar/menu-bar-item/menu-bar-item.component';
import { MenuBarLogoComponent } from './components/menu-bar/menu-bar-logo/menu-bar-logo.component';
import { HomeComponent } from './page/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuBarItemComponent,
    MenuBarLogoComponent,
    HomeComponent,
    SobreComponent,
    SobreNosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
