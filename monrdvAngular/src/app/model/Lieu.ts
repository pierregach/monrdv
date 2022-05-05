
import { Adresse } from "./Adresse";
import { Praticien } from "./Praticien";

export class Lieu {
	public id: number;
	public nom : string;
	public virtuel : boolean;
	public adr: Adresse;
	public praticien: Praticien;

	
	constructor(
		id?: number, 
		nom?: string,
		virtuel?: boolean,
		adr?: Adresse,
		praticien?: Praticien) {
		this.id = id;
		this.nom = nom;
		this.virtuel = virtuel;
		this.adr = adr;
		this.praticien = praticien;
	}
}