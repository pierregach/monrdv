import { Component, OnInit } from '@angular/core';
import { Motif } from '../model/Motif';
import { Patient } from '../model/Patient';
import { Praticien } from '../model/Praticien';
import { Specialite } from '../model/Specialite';
import { MotifPrdvService } from './service/motif-prdv.service';
import { PatientPrdvService } from './service/patient-prdv.service';
import { PraticienPrdvService } from './service/praticien-prdv.service';
import { SpecialitePrdvService } from './service/specialite-prdv.service';

@Component({
  selector: 'app-prise-rdv',
  templateUrl: './prise-rdv.component.html',
  styleUrls: ['./prise-rdv.component.scss']
})
export class PriseRdvComponent implements OnInit {

  praticien: Praticien;
  specialites: Array<Specialite>;
  patient: Patient;
  listeMotifs: Array<Motif> = new Array<Motif>();

  motifFormId: number;

  constructor(
    private praticienService: PraticienPrdvService,
    private patientService: PatientPrdvService,
    private motifService: MotifPrdvService,
    private specialiteService: SpecialitePrdvService) {

      this.praticienService.findById(2).subscribe(rep => {
        this.praticien = rep;
        this.specialiteService.findByPraticienId(this.praticien.id).subscribe(resp => {
          this.specialites = resp;
        });
      });

      this.patientService.findById(2).subscribe(rep => {
        this.patient = rep;
      });

      this.motifService.findByPraticienId(2).subscribe(rep => {
        this.listeMotifs = rep;
        this.motifFormId = this.listeMotifs[0].id;
      });


  }

  get motifForm(): Motif {
    return this.listeMotifs.find(mot => mot.id == this.motifFormId);
  }


  ngOnInit(): void {
  }

}
