import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericInformationCardComponent } from './components/generic-information-card/generic-information-card/generic-information-card.component';
import { HomeServiceHistoryCardComponent } from './components/home-service-history-card/home-service-history-card.component';
import { HomeImportantNotesComponent } from './components/home-service-history-card/home-important-notes/home-important-notes.component';
import { SelectAVendorPageComponent } from './components/pages/select-a-vendor-page/select-a-vendor-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HomeQuotedWorkComponent } from './components/pages/home/home-quoted-work/home-quoted-work.component';

@NgModule({
  declarations: [
    AppComponent,
    GenericInformationCardComponent,
    HomeServiceHistoryCardComponent,
    HomeImportantNotesComponent,
    SelectAVendorPageComponent,
    HomeComponent,
    HomeQuotedWorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
