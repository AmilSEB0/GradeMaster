import { Eleve } from "src/eleve/entities/eleve.entity";
import { Utilisateur } from "src/utilisateur/entities/utilisateur.entity";
import { Entity, OneToMany } from "typeorm";

@Entity()
export class Parent extends Utilisateur {
  @OneToMany(() => Eleve, (eleve) => eleve.id_parent)
  eleves: Eleve[];

  getEleves(): Eleve[] {
    return this.eleves;
  }

  setEleves(eleves: Eleve[]): void {
    this.eleves = eleves;
  }
}
