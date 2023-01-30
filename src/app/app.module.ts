import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericInformationCardComponent } from './components/generic-information-card/generic-information-card/generic-information-card.component';
import { HomeServiceHistoryCardComponent } from './components/home-service-history-card/home-service-history-card.component';
import { HomeImportantNotesComponent } from './components/home-important-notes/home-important-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    GenericInformationCardComponent,
    HomeServiceHistoryCardComponent,
    HomeImportantNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
