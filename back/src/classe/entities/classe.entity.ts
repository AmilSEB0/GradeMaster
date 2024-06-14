import { Eleve } from "src/eleve/entities/eleve.entity";
import { Professeur } from "src/professeur/entities/professeur.entity";
// eslint-disable-next-line prettier/prettier
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
} from "typeorm";

@Entity()
export class Classe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @OneToMany(() => Eleve, (eleve) => eleve.id_classe)
  eleves: Eleve[];

  @ManyToMany(() => Professeur, (professeur) => professeur.classes)
  professeurs: Professeur[];

  getNom(): string {
    return this.nom;
  }

  setNom(nom: string): void {
    this.nom = nom;
  }

  getEleves(): Eleve[] {
    return this.eleves;
  }

  setEleves(eleves: Eleve[]): void {
    this.eleves = eleves;
  }
}
