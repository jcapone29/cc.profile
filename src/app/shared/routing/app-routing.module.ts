import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallbackComponent } from '../auth/callback/callback.component';
import { AuthGuard } from '../auth/auth.guard';
import { MainViewComponent } from '../../public/splash-page/main-view/main-view.component';
import { DashboardComponent } from '../../dashboard/dashboard/dashboard.component';
import { SkillSetComponent } from 'src/app/public/splash-page/skill-set/skill-set.component';
import { ContactUsComponent } from 'src/app/public/contact/contact-us/contact-us.component';

//This is my case 
const routes: Routes = [
    { path: '', component: MainViewComponent },
    { path: 'contact', component: ContactUsComponent },
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    { path: "callback", component: CallbackComponent },
    { path: "**", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }