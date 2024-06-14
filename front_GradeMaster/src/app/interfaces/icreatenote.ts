export interface ICreatenote {
    coef: number;
    nom: string;
    eleves: { idEleve: number; note: number }[];
}