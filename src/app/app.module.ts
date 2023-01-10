import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { MyRouteReuseStrategy } from "../app/modules/MyRouteReuseStrategy";
import { RouteReuseStrategy } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { AppuserComponent } from './components/appuser/appuser.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { AlertComponent } from './components/utility/alert/alert.component';

import { NotificationComponent } from './components/notification/notification.component';
import { TabPageComponent } from './components/tab-page/tab-page.component';

import { NgAntModule } from './modules/ng-ant/ng-ant.module';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { UserEditComponent } from './components/modals/user-edit/user-edit.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppusergroupComponent } from './components/appusergroup/appusergroup.component';

import { NgxEchartsModule } from 'ngx-echarts';
import { ChartLineComponent } from './components/charts/chart-line/chart-line.component';
import { ChartTestComponent } from './components/chart-test/chart-test.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    AppuserComponent,
    LoginComponent,
    MainComponent,
    AlertComponent,
    NotificationComponent,
    TabPageComponent,
    AppmenuComponent,
    UserEditComponent,
    FooterComponent,
    AppusergroupComponent,
    ChartLineComponent,
    ChartTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClarityModule,
    HttpClientModule,
    NgAntModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: MyRouteReuseStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
