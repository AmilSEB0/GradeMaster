import { Eleve } from "src/eleve/entities/eleve.entity";
import { Professeur } from "src/professeur/entities/professeur.entity";
export declare class Note {
    id: number;
    coef: number;
    note: number;
    nom: string;
    id_professeur: Professeur;
    id_eleve: Eleve;
    getCoef(): number;
    setCoef(coef: number): void;
    getNote(): number;
    setNote(note: number): void;
    getNom(): string;
    setNom(nom: string): void;
    getidProfesseur(): Professeur;
    setidProfesseur(id_professeur: Professeur): void;
    getidEleve(): Eleve;
    setidEleve(id_eleve: Eleve): void;
}
