import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MnFullpageModule } from 'ngx-fullpage/index';
import { APP_INITIALIZER } from '@angular/core';
import { AppConfigService } from './shared/services/app-config.service';
import { AppearDirective } from './shared/directives/appear';
import { CodeLanguagesComponent } from './splash-page/code-languages/code-languages.component';
import { SkillSetComponent } from './splash-page/skill-set/skill-set.component';
import { SectionTitleComponent } from './splash-page/section-title/section-title.component';
import { ProjectCardComponent } from './splash-page/skill-set/project-card/project-card.component';
import { ProjectImageComponent } from './splash-page/skill-set/project-image/project-image.component';
import { WorkflowComponent } from './splash-page/workflow/workflow.component';
import { ResourcesComponent } from './splash-page/resources/resources.component';
import  'jquery';
import  'leader-line';
import { SplashPageComponent } from './splash-page/splash-page/splash-page.component';
import { MainViewComponent } from './splash-page/main-view/main-view.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './shared/routing/app-routing.module';
import { CallbackComponent } from './shared/auth/callback/callback.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AuthGuard } from './shared/auth/auth.guard';
import { ProposalComponent } from './dashboard/proposal/proposal.component';
import { ProjectsComponent } from './dashboard/projects/projects.component';
import { NotesComponent } from './dashboard/notes/notes.component';
import { StoryBoardComponent } from './dashboard/projects/story-board/story-board.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NavigationComponent } from './dashboard/navigation/navigation.component';
import { BusinessPlanComponent } from './splash-page/business-plan/business-plan.component';


@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
    SkillSetComponent,
    AppearDirective,
    CodeLanguagesComponent,
    SectionTitleComponent,
    ProjectCardComponent,
    ProjectImageComponent,
    ResourcesComponent,
    WorkflowComponent,
    MainViewComponent,
    CallbackComponent,
    DashboardComponent,
    ProposalComponent,
    ProjectsComponent,
    NotesComponent,
    StoryBoardComponent,
    HeaderComponent,
    NavigationComponent,
    BusinessPlanComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    MnFullpageModule.forRoot()
  ],
  exports: [

  ],
  providers: [
    AppConfigService,
    AuthGuard,
     { provide: APP_INITIALIZER, 
      useFactory: (config: AppConfigService) => () => config.load(),
       deps: [AppConfigService], 
       multi: true }
  ],
  bootstrap: [AppComponent]
})



export class AppModule { }
