insert into "patient" ("code_postal", "date_naissance", "email", "id", "mot_de_passe", "nom", "numeross", "prenom", "rue", "telephone", "version", "ville") values ('31000', '1985-04-25', 'jaimal@hotmail.fr', '1', 'mdp', 'Fovel', '184191841191', 'Philippe', 'rue des ponts', '06 25 24 18 17', 1, 'Toulouse');
insert into "patient" ("code_postal", "date_naissance", "email", "id", "mot_de_passe", "nom", "numeross", "prenom", "rue", "telephone", "version", "ville") values ('75018', '1958-02-13', 'adressemail@outlook.fr', '2', 'motdepasse', 'Michu', '654164196811', 'Josiane', 'avenue des peupliers', '06 14 18 22 52', 1, 'Paris');

insert into "praticien" ("carte_vitale", "cb", "cheque", "code_postal", "convention", "duree_creneau", "email", "espece", "id", "matricule", "mot_de_passe", "nom", "photo", "prenom", "rue", "telephone", "version", "ville") values (true, false, true, '75000', 'SECTEUR_1', 20, 'dentiste.paris@gmail.com', false, '2', '7456786', '0000', 'Maurice', ': - <', 'Dupont', '63 rue du Chene', '01 95 84 52 16', 1, 'Paris');
insert into "praticien" ("carte_vitale", "cb", "cheque", "code_postal", "convention", "duree_creneau", "email", "espece", "id", "matricule", "mot_de_passe", "nom", "photo", "prenom", "rue", "telephone", "version", "ville") values (true, true, false, '31000', 'HL', 15, 'truc@machin.com', false, '1', '4534534', '1234', 'Duflan', ':)', 'Jean', '25 rue des Cerises', '05 61 24 28 29', 1, 'Toulouse');

insert into "specialite" ("description", "id", "nom", "version") values ('Spécialiste des problèmes bucco-dentaires (dents, gencives...)', '1', 'Chirurgien-dentiste', 1);
insert into "specialite" ("description", "id", "nom", "version") values ('Prend en charge le suivi durable et les soins de santé généraux', '2', 'Généraliste', 1);

insert into "praticien_specialite" ("id", "praticien_id", "specialite_id", "version") values ('1', '1', '2', 1);
insert into "praticien_specialite" ("id", "praticien_id", "specialite_id", "version") values ('2', '2', '1', 1);

insert into "lieu" ("code_postal", "id", "nom", "praticien_id", "rue", "version", "ville", "virtuel") values ('75000', '1', 'Cabinet principal', '2', '63 rue du Chene', 1, 'Paris', false);
insert into "lieu" ("code_postal", "id", "nom", "praticien_id", "rue", "version", "ville", "virtuel") values ('31000', '2', 'Cabinet', '1', '25 rue des Cerises', 1, 'Toulouse', true);

insert into "motif" ("id", "libelle", "nb_creneau", "praticien_id", "version") values ('1', 'Examen de routine', 1, '1', 1);
insert into "motif" ("id", "libelle", "nb_creneau", "praticien_id", "version") values ('2', 'Examen complet', 2, '1', 1);
insert into "motif" ("id", "libelle", "nb_creneau", "praticien_id", "version") values ('3', 'Controle annuel', 1, '2', 1);
insert into "motif" ("id", "libelle", "nb_creneau", "praticien_id", "version") values ('4', 'Implant dentaire', 3, '2', 1);

