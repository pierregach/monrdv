import { Praticien } from "./Praticien";

export class Motif {
    public id : number;
    public libelle : string;
    public nbCreneau : number;
    public praticien : Praticien;

    constructor(
        id? : number,
        libelle? : string,
        nbCreneau? : number,
        praticien? : Praticien
    ) {
        this.id = id
        this.libelle = libelle
        this.nbCreneau = nbCreneau
        this.praticien = praticien

    }
}
