import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppGlobalService } from 'src/app/app-global.service';
import { Patient } from 'src/app/model/Patient';
@Injectable({
  providedIn: 'root'
})
export class PatientPrdvService {

  private apiPath: string;

  constructor(private http: HttpClient, private appGlobalService: AppGlobalService) {

    this.apiPath = appGlobalService.apiPath + 'patient/';
   }

   findById(id: number): Observable<Patient> {
    return this.http.get<Patient>(this.apiPath + id);
   }
}
