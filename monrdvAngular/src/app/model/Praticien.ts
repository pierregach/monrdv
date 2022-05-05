import { Adresse } from "./Adresse";
import { Utilisateur } from "./Utilisateur"

export class Praticien extends Utilisateur{
  matricule: string;
  telephone: string;
  photo: string;
  convention: string;
  carteVitale: boolean;
  cb: boolean;
  cheque: boolean;
  espece: boolean;
  dureeCreneau: number;

  constructor(
    id?: number,
    nom?: string,
    prenom?: string,
    email?: string,
    motDePasse?: string,
    adresse?: Adresse,
    matricule?: string,
    telephone?: string,
    photo?: string,
    convention?: string,
    carteVitale?: boolean,
    cb?: boolean,
    cheque?: boolean,
    espece?: boolean,
    dureeCreneau?: number
  ) {
    super(id, nom, prenom, email, motDePasse, adresse);
    this.matricule = matricule;
    this.telephone = telephone;
    this.photo = photo;
    this.convention = convention;
    this.carteVitale = carteVitale;
    this.cb = cb;
    this.cheque = cheque;
    this.espece = espece;
    this.dureeCreneau = dureeCreneau;
  }
}
