export declare class CreateNoteDto {
    coef: number;
    nom: string;
    eleves: {
        idEleve: number;
        note: number;
    }[];
}
