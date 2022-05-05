export class Utilisateur {
    public id : number;
    public nom : string;
    public prenom: string;
    public email : string;
    public motDePasse : string;
    public adresse : Adresse;

    constructor(
        id?: number,
        nom? : string,
        prenom? : string,
        email? : string,
        motDePasse? : string,
        adresse? : adresse
    ) {
        this.id = id
        this.nom = nom
        this.prenom = prenom
        this.email = email
        this.motDePasse = motDePasse
        this.adresse = adresse
    }

    

}