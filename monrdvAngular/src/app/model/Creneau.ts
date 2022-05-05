import { Consultation } from "./Consultation";
import { Lieu } from "./Lieu";
import { Praticien } from "./Praticien";

export class Creneau {
	public id: number;
	public dateCreneau : Date;
	public heureCreneau : Date;
	public duree: number;
	public dispo: boolean;
	public praticien: Praticien;
	public lieu: Lieu;
	public consultation: Consultation;


	constructor(
		id?: number,
		dateCreneau?: Date,
		heureCreneau?: Date,
		duree?: number,
		dispo?: boolean,
		praticien?: Praticien,
		lieu?: Lieu,
		consultation?: Consultation) {
		this.id = id;
		this.dateCreneau = dateCreneau;
		this.heureCreneau = heureCreneau;
		this.duree = duree;
		this.dispo = dispo;
		this.praticien = praticien;
		this.lieu = lieu;
		this.consultation = consultation;
	}
}
