import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { AccueilRechercheComponent } from './accueil-recherche/accueil-recherche.component';
=======
import { PriseRdvComponent } from './prise-rdv/prise-rdv.component';
>>>>>>> 2f474f6568207a7bb2f9be12c7c9d22d17af8d6e

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    AccueilRechercheComponent
=======
    PriseRdvComponent
>>>>>>> 2f474f6568207a7bb2f9be12c7c9d22d17af8d6e
  ],
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
