import { Eleve } from "src/eleve/entities/eleve.entity";
import { Utilisateur } from "src/utilisateur/entities/utilisateur.entity";
export declare class Parent extends Utilisateur {
    eleves: Eleve[];
    getEleves(): Eleve[];
    setEleves(eleves: Eleve[]): void;
}
