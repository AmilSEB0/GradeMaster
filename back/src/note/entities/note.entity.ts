/* eslint-disable camelcase */
import { Eleve } from "src/eleve/entities/eleve.entity";
import { Professeur } from "src/professeur/entities/professeur.entity";
// eslint-disable-next-line prettier/prettier
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  coef: number;

  @Column()
  note: number;

  @Column()
  nom: string;

  @ManyToOne(() => Professeur, (professeur) => professeur.notes)
  @JoinColumn({ name: "idProfesseur" })
  id_professeur: Professeur;

  @ManyToOne(() => Eleve, (eleve) => eleve.notes)
  @JoinColumn({ name: "idEleve" })
  id_eleve: Eleve;

  getCoef(): number {
    return this.coef;
  }

  setCoef(coef: number): void {
    this.coef = coef;
  }

  getNote(): number {
    return this.note;
  }

  setNote(note: number): void {
    this.note = note;
  }

  getNom(): string {
    return this.nom;
  }

  setNom(nom: string): void {
    this.nom = nom;
  }

  getidProfesseur(): Professeur {
    return this.id_professeur;
  }

  setidProfesseur(id_professeur: Professeur) {
    this.id_professeur = id_professeur;
  }

  getidEleve(): Eleve {
    return this.id_eleve;
  }

  setidEleve(id_eleve: Eleve) {
    this.id_eleve = id_eleve;
  }
}
