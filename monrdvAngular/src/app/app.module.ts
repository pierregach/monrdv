import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CreneauComponent } from './creneau/creneau.component';
import { AccueilRechercheComponent } from './accueil-recherche/accueil-recherche.component';
import { PriseRdvComponent } from './prise-rdv/prise-rdv.component';

@NgModule({
  declarations: [
    AppComponent,
    CreneauComponent,
    AccueilRechercheComponent,
    PriseRdvComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
