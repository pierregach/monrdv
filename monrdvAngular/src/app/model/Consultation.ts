import { Creneau } from "./Creneau";
import { Motif } from "./Motif";
import { Patient } from "./Patient";
import { Praticien } from "./Praticien";

export class Consultation {
    public id:number;
    public statut:string;
    public nbCreneau:number;
    public patient:Patient; 
    public praticien:Praticien;
    public motif:Motif;
    public creneaux:Array<Creneau>;

  constructor(
    id?: number, 
    statut?: string, 
    nbCreneau?: number, 
    patient?: Patient, 
    praticien?: Praticien, 
    motif?: Motif, 
    creneaux?: Array<Creneau>
) {
    this.id = id
    this.statut = statut
    this.nbCreneau = nbCreneau
    this.patient = patient
    this.praticien = praticien
    this.motif = motif
    this.creneaux = creneaux
  }

}