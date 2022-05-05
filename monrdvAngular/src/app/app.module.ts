import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CreneauComponent } from './creneau/creneau.component';
import { AccueilRechercheComponent } from './accueil-recherche/accueil-recherche.component';
import { PriseRdvComponent } from './prise-rdv/prise-rdv.component';
import { InfoPatientComponent } from './prise-rdv/info-patient/info-patient.component';
import { InfoPraticienComponent } from './prise-rdv/info-praticien/info-praticien.component';
import { CalendrierCreneauComponent } from './prise-rdv/calendrier-creneau/calendrier-creneau.component';

@NgModule({
  declarations: [
    AppComponent,
    CreneauComponent,
    AccueilRechercheComponent,
    PriseRdvComponent,
    InfoPatientComponent,
    InfoPraticienComponent,
    CalendrierCreneauComponent],
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
