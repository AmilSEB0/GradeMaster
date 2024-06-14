import { Classe } from "src/classe/entities/classe.entity";
import { Matiere } from "src/matiere/entities/matiere.entity";
import { Note } from "src/note/entities/note.entity";
import { Utilisateur } from "src/utilisateur/entities/utilisateur.entity";
export declare class Professeur extends Utilisateur {
    id_matiere: Matiere;
    classes: Classe[];
    notes: Note[];
    getmatiere(): Matiere;
    setmatiere(id_matiere: Matiere): void;
    getClasses(): Classe[];
    setClasses(classes: Classe[]): void;
    getNotes(): Note[];
    setNotes(notes: Note[]): void;
}
