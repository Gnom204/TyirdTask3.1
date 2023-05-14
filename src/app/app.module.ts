import { TuiRootModule, TuiDialogModule, TuiAlertModule, TuiButtonModule, TuiLinkModule, TuiNotificationModule } from "@taiga-ui/core";
import { TuiInputModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { ReportsComponent } from "./reports/reports.component";
import { SettingsComponent } from "./settings/settings.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { ScrollingModule } from '@angular/cdk/scrolling';

const appRoutes: Routes = [
  { path: '', component: ContentComponent },
  // Роут на страницу с отчетами о вебинарах
  { path: 'reports', component: ReportsComponent },
  // Роут на страницу с настройками битрикс(данные не отправляются в битрикс т.к. не )
  { path: 'settings', component: SettingsComponent },
  { path: '**', component: NotfoundComponent },
  // { path: '', component:},
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ContentComponent,
    ReportsComponent
  ],
  imports: [
    ScrollingModule,
    BrowserModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiButtonModule,
    TuiLinkModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiNotificationModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
