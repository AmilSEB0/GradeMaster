/* eslint-disable camelcase */
import { Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Utilisateur } from "src/utilisateur/entities/utilisateur.entity";
import { Classe } from "src/classe/entities/classe.entity";
import { Parent } from "src/parent/entities/parent.entity";
import { Note } from "src/note/entities/note.entity";

@Entity()
export class Eleve extends Utilisateur {
  @ManyToOne(() => Classe, (classe) => classe.eleves)
  @JoinColumn({ name: "idClasse" })
  id_classe: Classe;

  @ManyToOne(() => Parent, (parent) => parent.eleves)
  @JoinColumn({ name: "idParent" })
  id_parent: Parent;

  @OneToMany(() => Note, (note) => note.id_eleve)
  notes: Note[];

  getidClasse(): Classe {
    return this.id_classe;
  }

  setidClasse(classe: Classe) {
    this.id_classe = classe;
  }

  getidParent(): Parent {
    return this.id_parent;
  }

  setidParent(parent: Parent) {
    this.id_parent = parent;
  }

  getNotes(): Note[] {
    return this.notes;
  }

  setNotes(notes: Note[]) {
    this.notes = notes;
  }
}
