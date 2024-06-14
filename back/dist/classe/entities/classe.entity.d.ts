import { Eleve } from "src/eleve/entities/eleve.entity";
import { Professeur } from "src/professeur/entities/professeur.entity";
export declare class Classe {
    id: number;
    nom: string;
    eleves: Eleve[];
    professeurs: Professeur[];
    getNom(): string;
    setNom(nom: string): void;
    getEleves(): Eleve[];
    setEleves(eleves: Eleve[]): void;
}
