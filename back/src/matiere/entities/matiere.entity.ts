import { Professeur } from "src/professeur/entities/professeur.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()
export class Matiere {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @OneToMany(() => Professeur, (professeur) => professeur.id_matiere)
  professeur: Professeur[];

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  getNom(): string {
    return this.nom;
  }

  setNom(nom: string): void {
    this.nom = nom;
  }

  getProfesseurs(): Professeur[] {
    return this.professeur;
  }

  setProfesseurs(professeur: Professeur[]): void {
    this.professeur = professeur;
  }
}
