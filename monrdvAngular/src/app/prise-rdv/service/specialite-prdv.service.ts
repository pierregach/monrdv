import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AppGlobalService } from 'src/app/app-global.service';
import { Specialite } from 'src/app/model/Specialite';

@Injectable({
  providedIn: 'root'
})
export class SpecialitePrdvService {

  private apiPath: string;

  constructor(private http: HttpClient, private appGlobalService: AppGlobalService) {

    this.apiPath = appGlobalService.apiPath + 'specialite/';
   }

   findByPraticienId(id: number): Observable<Array<Specialite>> {
    return this.http.get<Array<Specialite>>(this.apiPath + 'praticien/' +  id);
   }
}
