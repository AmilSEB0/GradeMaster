import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Utilisateur {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column()
  email: string;

  @Column()
  motDePasse: string;

  @Column()
  role: number;

  getNom(): string {
    return this.nom;
  }

  setNom(nom: string): void {
    this.nom = nom;
  }

  getPrenom(): string {
    return this.prenom;
  }

  setPrenom(prenom: string): void {
    this.prenom = prenom;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  getMotDePasse(): string {
    return this.motDePasse;
  }

  setMotDePasse(motDePasse: string): void {
    this.motDePasse = motDePasse;
  }

  getRole(): number {
    return this.role;
  }

  setRole(role: number): void {
    this.role = role;
  }
}
