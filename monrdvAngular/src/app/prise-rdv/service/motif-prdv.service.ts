import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppGlobalService } from 'src/app/app-global.service';
import { Motif } from 'src/app/model/Motif';

@Injectable({
  providedIn: 'root'
})
export class MotifPrdvService {

  private apiPath: string;

  constructor(private http: HttpClient, private appGlobalService: AppGlobalService) {

    this.apiPath = appGlobalService.apiPath + 'motif/';
   }

   findByPraticienId(id: number){
     return this.http.get<Array<Motif>>(this.apiPath + 'praticien/' + id);
   }


}
