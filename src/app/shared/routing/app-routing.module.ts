import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from 'src/app/splash-page/main-view/main-view.component';
import { CallbackComponent } from '../auth/callback/callback.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard/dashboard.component';
import { AuthGuard } from '../auth/auth.guard';

//This is my case 
const routes: Routes = [
    { path: 'home', component: MainViewComponent },
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    { path: "callback", component: CallbackComponent },
    { path: "**", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }