/* eslint-disable no-unused-vars */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Eleve } from "./entities/eleve.entity";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";

@Injectable()
export class EleveService {
  constructor(
    @InjectRepository(Eleve)
    private readonly eleveRepository: Repository<Eleve>,
  ) {}

  findAll() {
    return `This action returns all eleve`;
  }

  async getElevesByParentId(parentId: number): Promise<Eleve[]> {
    return this.eleveRepository
      .createQueryBuilder("eleve")
      .select(["eleve.id", "eleve.nom", "eleve.prenom"])
      .where("eleve.id_parent = :parentId", { parentId })
      .getMany();
  }

  findOne(id: number) {
    return this.eleveRepository.findOne({
      where: { id },
    });
  }

  async CryptMDPEleve() {
    const eleves = await this.eleveRepository.find();
    for (const eleve of eleves) {
      const hashedPassword = await this.hashPassword(eleve.motDePasse);
      eleve.motDePasse = hashedPassword;
      await this.eleveRepository.save(eleve);
    }
  }

  // Fonction pour hacher un mot de passe
  async hashPassword(password: string): Promise<string> {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  }

  remove(id: number) {
    return `This action removes a #${id} eleve`;
  }
}
