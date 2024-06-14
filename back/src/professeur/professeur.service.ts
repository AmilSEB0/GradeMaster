/* eslint-disable no-unused-vars */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Professeur } from "./entities/professeur.entity";
import * as bcrypt from "bcrypt";

@Injectable()
export class ProfesseurService {
  constructor(
    @InjectRepository(Professeur)
    private readonly professeurRepository: Repository<Professeur>,
  ) {}

  async findAll() {
    const professeur = await this.professeurRepository.find();
    return professeur;
  }

  async findMatiereofProfesseur(idProfesseur: number) {
    const professeur = await this.professeurRepository
      .createQueryBuilder("professeur")
      .select("professeur.idMatiere")
      .where("professeur.id = :id", { id: idProfesseur })
      .getRawOne();
    return professeur.idMatiere;
  }

  findOne(id: string) {
    const numericId = parseInt(id, 10); // Convertit la chaîne "id" en nombre
    return this.professeurRepository.findOne({
      where: { id: numericId },
    });
  }

  async CryptMDPProfesseur() {
    const professeurs = await this.professeurRepository.find();
    for (const professeur of professeurs) {
      const hashedPassword = await this.hashPassword(professeur.motDePasse);
      professeur.motDePasse = hashedPassword;
      await this.professeurRepository.save(professeur);
    }
  }

  // Fonction pour hacher un mot de passe
  async hashPassword(password: string): Promise<string> {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  }

  remove(id: number) {
    return `This action removes a #${id} professeur`;
  }
}
