import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { LogoArgProgComponent } from './components/header/logo-arg-prog/logo-arg-prog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoArgProgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
