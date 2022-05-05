import { Adresse } from "./Adresse";
import { Consultation } from "./Consultation";
import { Utilisateur } from "./Utilisateur";

export class Patient extends Utilisateur {
    public dateNaissance: string;
    public numeroSS: string;
    public telephone: string;
    public consultation: Array<Consultation>;


    constructor(
        id?: number,
        nom?: string,
        prenom?: string,
        email?: string,
        motDePasse?: string,
        adresse?: Adresse,
        dateNaissance?: string,
        numeroSS?: string,
        telephone?: string,
        consultation?: Array<Consultation>
    ) {
        super(id, nom, prenom, email, motDePasse, adresse)
        this.dateNaissance = dateNaissance
        this.numeroSS = numeroSS
        this.telephone = telephone
        this.consultation = consultation
    }

}