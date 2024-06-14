import { Utilisateur } from "src/utilisateur/entities/utilisateur.entity";
import { Classe } from "src/classe/entities/classe.entity";
import { Parent } from "src/parent/entities/parent.entity";
import { Note } from "src/note/entities/note.entity";
export declare class Eleve extends Utilisateur {
    id_classe: Classe;
    id_parent: Parent;
    notes: Note[];
    getidClasse(): Classe;
    setidClasse(classe: Classe): void;
    getidParent(): Parent;
    setidParent(parent: Parent): void;
    getNotes(): Note[];
    setNotes(notes: Note[]): void;
}
