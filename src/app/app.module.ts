import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { CommonModule } from '@angular/common';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MnFullpageModule } from 'ngx-fullpage/index';
import  'jquery';
import 'fullpage.js';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SideNavComponent } from './side-nav/side-nav.component'
import { APP_INITIALIZER } from '@angular/core';
import { AppConfigService } from './shared/services/app-config.service';
import { AppearDirective } from './shared/directives/appear';
import { CodeLanguagesComponent } from './code-languages/code-languages.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SectionTitleComponent } from './section-title/section-title.component';
import { ProjectCardComponent } from './skill-set/project-card/project-card.component';
import { ProjectImageComponent } from './skill-set/project-image/project-image.component';


@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
    SkillSetComponent,
    AboutMeComponent,
    SideNavComponent,
    AppearDirective,
    CodeLanguagesComponent,
    SectionTitleComponent,
    ProjectCardComponent,
    ProjectImageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MnFullpageModule.forRoot()
  ],
  exports: [

  ],
  providers: [
    AppConfigService,
     { provide: APP_INITIALIZER, 
      useFactory: (config: AppConfigService) => () => config.load(),
       deps: [AppConfigService], 
       multi: true }
  ],
  bootstrap: [AppComponent]
})



export class AppModule { }
