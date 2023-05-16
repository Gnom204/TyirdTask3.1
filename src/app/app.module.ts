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
import { TuiAccordionModule } from '@taiga-ui/kit';
import { ShortcodesComponent } from './shortcodes/shortcodes.component';
import { SettingsMainComponent } from "./settings-main/settings-main.component";
import { SettingsFieldComponent } from "./settings-field/settings-field.component";
import { SettingsPayComponent } from "./settings-pay/settings-pay.component";
import { SettingsFieldPaymentComponent } from "./settings-field-payment/settings-field-payment.component";
import { SettingsFieldReportsComponent } from "./settings-field-reports/settings-field-reports.component";
import { SettingsFieldMainComponent } from "./settings-field-main/settings-field-main.component";
import { TuiTextAreaModule } from '@taiga-ui/kit';

const appRoutes: Routes = [
  { path: '', component: ContentComponent },
  // Роут на страницу с отчетами о вебинарах
  { path: 'reports', component: ReportsComponent },
  // Роут на страницу с настройками битрикс(данные не отправляются в битрикс т.к. не )
  {
    path: 'settings', component: SettingsComponent,
    children: [
      {
        path: '',
        component: SettingsMainComponent
      },
      {
        path: 'field',
        component: SettingsFieldComponent,
        children: [
          {
            path: '',
            component: SettingsFieldMainComponent
          },
          {
            path: 'payment',
            component: SettingsFieldPaymentComponent
          },
          {
            path: 'reports',
            component: SettingsFieldReportsComponent
          }
        ]
      },
      {
        path: 'pay',
        component: SettingsPayComponent
      }
    ]
  },
  // Роут на страницу с шорткодами
  { path: 'shortcodes', component: ShortcodesComponent },

  { path: '**', component: NotfoundComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ContentComponent,
    ReportsComponent,
    ShortcodesComponent,
    SettingsComponent,
    SettingsMainComponent,
    SettingsFieldComponent,
    SettingsPayComponent,
    SettingsFieldMainComponent,
    SettingsFieldPaymentComponent,
    SettingsFieldReportsComponent
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
    TuiAccordionModule,
    TuiTextAreaModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
