import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';

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
import { SkillsComponent } from './components/skills/skills.component';
import { SkillItemComponent } from './components/skills/skill-item/skill-item.component';
import { DeletebtnComponent } from './components/general/deletebtn/deletebtn.component';
import { EditbtnComponent } from './components/general/editbtn/editbtn.component';
import { EducationComponent } from './components/education/education.component';
import { EducationItemComponent } from './components/education/education-item/education-item.component';


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
    BtnshowexpComponent,
    SkillsComponent,
    SkillItemComponent,
    DeletebtnComponent,
    EditbtnComponent,
    EducationComponent,
    EducationItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      "radius": 120,
      "space": -10,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#dce6f9",
      "outerStrokeGradientStopColor": "#67acc1",
      "innerStrokeColor": "#e0ebff",
      "innerStrokeWidth": 10,
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": true,
      "showBackground": false,
      "showInnerStroke":false,
      "showImage": true,
      "clockwise": true,
      "startFromZero": true,
      "responsive":false,
      "lazy": false})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
