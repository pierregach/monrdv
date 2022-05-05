import { Adresse } from "./Adresse";

export class Utilisateur {

  id: number;
  nom: string;
  prenom: string;
  email: string;
  motDePasse: string;
  adresse: Adresse;

  constructor(
    id?: number,
    nom?: string,
    prenom?: string,
    email?: string,
    motDePasse? : string,
    adresse?: Adresse) {
      this.id = id;
      this.nom = nom;
      this.prenom = prenom;
      this.email = email;
      this.motDePasse = motDePasse;
      this.adresse = adresse;
    }
}
