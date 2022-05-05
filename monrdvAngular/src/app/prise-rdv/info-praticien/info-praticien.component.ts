import { Component, Input, OnInit } from '@angular/core';
import { Praticien } from 'src/app/model/Praticien';
import { Specialite } from 'src/app/model/Specialite';

@Component({
  selector: '[info-praticien]',
  templateUrl: './info-praticien.component.html',
  styleUrls: ['./info-praticien.component.scss']
})
export class InfoPraticienComponent implements OnInit {

  @Input()
  praticien: Praticien;

  @Input()
  specialites: Array<Specialite>;

  constructor() { }

  ngOnInit(): void {
  }

}
