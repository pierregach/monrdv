import { Praticien } from "./Praticien"
import { Specialite } from "./Specialite";

export class PraticienSpecialite {
    id: number
    praticien: Praticien 
    specialite: Specialite 

    constructor(

        id?: number,
        praticien?: Praticien,
        specialite?: Specialite

    ) {

        this.id=id;
        this.praticien=praticien;
        this.specialite=specialite;
    }

    
}