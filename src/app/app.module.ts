import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { LogoArgProgComponent } from './components/header/logo-arg-prog/logo-arg-prog.component';
import { SociallinkComponent } from './components/header/sociallink/sociallink.component';
import { LoginBarComponent } from './components/header/login-bar/login-bar.component';
import { BannerComponent } from './components/header/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ExperienciaItemComponent } from './components/experiencia/experiencia-item/experiencia-item.component';
import { AddexpComponent } from './components/experiencia/addexp/addexp.component';
import { BtnshowexpComponent } from './components/experiencia/btnshowexp/btnshowexp.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoArgProgComponent,
    SociallinkComponent,
    LoginBarComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    ExperienciaItemComponent,
    AddexpComponent,
    BtnshowexpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
