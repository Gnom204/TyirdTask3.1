import { TuiRootModule, TuiDialogModule, TuiAlertModule, TuiButtonModule, TuiLinkModule, TuiNotificationModule } from "@taiga-ui/core";
import { TuiInputModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiButtonModule,
    TuiLinkModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiNotificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
