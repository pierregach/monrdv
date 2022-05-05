import { Component, Input, OnInit } from '@angular/core';
import { Motif } from 'src/app/model/Motif';
import { Patient } from 'src/app/model/Patient';

@Component({
  selector: '[info-patient]',
  templateUrl: './info-patient.component.html',
  styleUrls: ['./info-patient.component.scss']
})
export class InfoPatientComponent implements OnInit {

  @Input()
  patient: Patient;

  @Input()
  motif: Motif;

  constructor() { }

  ngOnInit(): void {
  }

}
