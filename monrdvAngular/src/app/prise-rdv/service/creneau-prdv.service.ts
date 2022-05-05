import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobalService } from 'src/app/app-global.service';
import { Creneau } from 'src/app/model/Creneau';

@Injectable({
  providedIn: 'root'
})
export class CreneauPrdvService {

  private apiPath: string;

  constructor(private http: HttpClient, private appGlobalService: AppGlobalService) {

    this.apiPath = appGlobalService.apiPath + 'creneau/';
   }

   findByPraticienId(id: number){
     return this.http.get<Array<Creneau>>(this.apiPath + 'praticien/' + id);
   }
}
