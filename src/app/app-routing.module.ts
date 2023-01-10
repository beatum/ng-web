import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { AppuserComponent } from './components/appuser/appuser.component';
import { LoginComponent } from './components/login/login.component';

import { MainComponent } from './components/main/main.component';
import { AccessPrivilegeGuardGuard } from './guards/access-privilege-guard.guard';
import { AppusergroupComponent } from './components/appusergroup/appusergroup.component';
import { ChartTestComponent } from './components/chart-test/chart-test.component';


const routes: Routes = [
  { path: '', redirectTo: '\login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'main', component: MainComponent, canActivate: [AccessPrivilegeGuardGuard],
    children: [
      { path: 'appuser', component: AppuserComponent, canActivate: [AccessPrivilegeGuardGuard], data: { uid: "appuser", name: "User", useCache: true } },
      { path: 'appmenu', component: AppmenuComponent, canActivate: [AccessPrivilegeGuardGuard], data: { uid: "appmenu", name: "Menu", useCache: true } },
      { path: 'appusergroup', component: AppusergroupComponent, canActivate: [AccessPrivilegeGuardGuard], data: { uid: "appusergroup", name: "User group", useCache: true } },

      { path: 'chartTest', component: ChartTestComponent, canActivate: [AccessPrivilegeGuardGuard], data: { uid: "chartTest", name: "Chart Test", useCache: false } }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
