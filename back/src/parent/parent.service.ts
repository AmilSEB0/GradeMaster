/* eslint-disable no-unused-vars */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Parent } from "./entities/parent.entity";
import * as bcrypt from "bcrypt";

@Injectable()
export class ParentService {
  constructor(
    @InjectRepository(Parent)
    private readonly parentRepository: Repository<Parent>,
  ) {}

  findAll() {
    return `This action returns all parent`;
  }

  async CryptMDPParent() {
    const parents = await this.parentRepository.find();
    for (const parent of parents) {
      const hashedPassword = await this.hashPassword(parent.motDePasse);
      parent.motDePasse = hashedPassword;
      await this.parentRepository.save(parent);
    }
  }

  // Fonction pour hacher un mot de passe
  async hashPassword(password: string): Promise<string> {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  }
}
