import { Professeur } from "src/professeur/entities/professeur.entity";
export declare class Matiere {
    id: number;
    nom: string;
    professeur: Professeur[];
    getId(): number;
    setId(id: number): void;
    getNom(): string;
    setNom(nom: string): void;
    getProfesseurs(): Professeur[];
    setProfesseurs(professeur: Professeur[]): void;
}
