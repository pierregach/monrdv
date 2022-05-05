import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppGlobalService } from 'src/app/app-global.service';
import { Praticien } from 'src/app/model/Praticien';

@Injectable({
  providedIn: 'root'
})
export class PraticienPrdvService{

  private apiPath: string;

  constructor(private http: HttpClient, private appGlobalService: AppGlobalService) {

    this.apiPath = appGlobalService.apiPath + 'praticien/';
   }

   findById(id: number): Observable<Praticien> {
    return this.http.get<Praticien>(this.apiPath + id);
   }
}
