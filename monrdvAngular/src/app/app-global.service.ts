import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppGlobalService {

  apiPath: string;

  constructor() {
    this.apiPath = 'http://localhost:8080/';
  }
}
