import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MnFullpageModule } from 'ngx-fullpage/index';
import { APP_INITIALIZER } from '@angular/core';
import { AppConfigService } from './shared/services/app-config.service';
import { AppearDirective } from './shared/directives/appear';
import  'jquery';
import  'leader-line';
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
import { SplashPageComponent } from './public/splash-page/main-view/splash-page/splash-page.component';
import { SkillSetComponent } from './public/splash-page/skill-set/skill-set.component';
import { SectionTitleComponent } from './public/splash-page/section-title/section-title.component';
import { ResourcesComponent } from './public/splash-page/main-view/resources/resources.component';
import { MainViewComponent } from './public/splash-page/main-view/main-view.component';
import { WorkflowComponent } from './public/splash-page/main-view/workflow/workflow.component';
import { BusinessPlanComponent } from './public/splash-page/main-view/business-plan/business-plan.component';
import { SplashFooterComponent } from './public/splash-page/main-view/splash-footer/splash-footer.component';
import { InfoCardComponent } from './shared/components/info-card/info-card.component';
import { ContactUsComponent } from './public/contact/contact-us/contact-us.component';
import { ContactWidgetComponent } from './public/contact/contact-widget/contact-widget.component';
import { ContactCardComponent } from './public/contact/contact-card/contact-card.component';



@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
    SkillSetComponent,
    AppearDirective,
    SectionTitleComponent,
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
    BusinessPlanComponent,
    SplashFooterComponent,
    InfoCardComponent,
    ContactWidgetComponent,
    ContactUsComponent,
    ContactCardComponent
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
