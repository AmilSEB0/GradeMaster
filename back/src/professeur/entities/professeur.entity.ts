import { Classe } from "src/classe/entities/classe.entity";
import { Matiere } from "src/matiere/entities/matiere.entity";
import { Note } from "src/note/entities/note.entity";
import { Utilisateur } from "src/utilisateur/entities/utilisateur.entity";
// eslint-disable-next-line prettier/prettier
import {Entity, OneToMany, ManyToOne, JoinTable, ManyToMany, JoinColumn} from "typeorm";

@Entity()
export class Professeur extends Utilisateur {
  @ManyToOne(() => Matiere, (matiere) => matiere.professeur)
  @JoinColumn({ name: "idMatiere" })
  // eslint-disable-next-line camelcase
  id_matiere: Matiere;

  @ManyToMany(() => Classe, (classe) => classe.professeurs)
  @JoinTable()
  classes: Classe[];

  @OneToMany(() => Note, (note) => note.id_professeur)
  notes: Note[];

  getmatiere(): Matiere {
    return this.id_matiere;
  }

  // eslint-disable-next-line camelcase
  setmatiere(id_matiere: Matiere): void {
    // eslint-disable-next-line camelcase
    this.id_matiere = id_matiere;
  }

  getClasses(): Classe[] {
    return this.classes;
  }

  setClasses(classes: Classe[]): void {
    this.classes = classes;
  }

  getNotes(): Note[] {
    return this.notes;
  }

  setNotes(notes: Note[]): void {
    this.notes = notes;
  }
}
