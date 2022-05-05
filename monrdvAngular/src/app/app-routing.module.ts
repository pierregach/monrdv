import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PriseRdvComponent } from './prise-rdv/prise-rdv.component';

const routes: Routes = [
  {path: "prise-rdv", component: PriseRdvComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
