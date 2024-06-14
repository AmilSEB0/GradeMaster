/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import { Injectable, NotFoundException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Parent } from "src/parent/entities/parent.entity";
import { Professeur } from "src/professeur/entities/professeur.entity";
import { Eleve } from "src/eleve/entities/eleve.entity";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(Parent)
    private readonly parentRepository: Repository<Parent>,
    @InjectRepository(Professeur)
    private readonly professeurRepository: Repository<Professeur>,
    @InjectRepository(Eleve)
    private readonly eleveRepository: Repository<Eleve>,
  ) {}

  async validateUser(email: string, motDePasse: string): Promise<any> {
    const parent = await this.parentRepository.findOne({
      where: { email },
    });
    const professeur = await this.professeurRepository.findOne({
      where: { email },
    });
    const eleve = await this.eleveRepository.findOne({
      where: { email },
    });

    if (parent) {
      // Utilisateur trouvé dans la table Parent
      const motDePasseCorrespondant = await bcrypt.compare(motDePasse, parent.motDePasse);
      if (!motDePasseCorrespondant) {
        throw new NotFoundException("Mot de passe incorrect"); // Mot de passe incorrect
      }
      return parent;
    } else if (professeur) {
      // Utilisateur trouvé dans la table Professeur
      const motDePasseCorrespondant = await bcrypt.compare(motDePasse, professeur.motDePasse);
      if (!motDePasseCorrespondant) {
        throw new NotFoundException("Mot de passe incorrect"); // Mot de passe incorrect
      }
      return professeur;
    } else if (eleve) {
      // Utilisateur trouvé dans la table Eleve
      const motDePasseCorrespondant = await bcrypt.compare(motDePasse, eleve.motDePasse);
      if (!motDePasseCorrespondant) {
        throw new NotFoundException("Mot de passe incorrect"); // Mot de passe incorrect
      }
      return eleve;
    } else {
      // Aucun utilisateur trouvé
      throw new NotFoundException("Utilisateur introuvable"); // Mot de passe incorrect
    }
  }

  async login(user: any) {
    const payload = {
      id: user.id,
      nom: user.nom,
      prenom: user.prenom,
      role: user.role,
    };
    return {
      // eslint-disable-next-line camelcase
      access_token: this.jwtService.sign(payload),
    };
  }
}
