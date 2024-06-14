/* eslint-disable no-unused-vars */
import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Eleve } from "../entities/eleve.entity";
import { Professeur } from "src/professeur/entities/professeur.entity";

@Injectable()
export class EleveNoteGuard implements CanActivate {
  // eslint-disable-next-line no-unused-vars
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(Eleve)
    private readonly eleveRepository: Repository<Eleve>,
    @InjectRepository(Professeur)
    private readonly professeurRepository: Repository<Professeur>,
  ) {}

  // eslint-disable-next-line prettier/prettier
 canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return false;
    }

    const token = authHeader.split(" ")[1];
    try {
      const user = this.jwtService.verify(token);
      const eleveId = request.params.eleveId;

      if (user && user.role === 3) {
        if (user.id === eleveId) {
          return true;
        }
      } else if (user && user.role === 2) {
        return this.linkBetweenParentAndEleve(eleveId, user.id).then();
      } else if (user && user.role === 1) {
        return this.isProfesseur(eleveId, user.id).then();
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  // eslint-disable-next-line prettier/prettier
  async linkBetweenParentAndEleve(id: number, parentId: number): Promise<boolean> {
    // eslint-disable-next-line prefer-const
    let queryBuilder = this.eleveRepository.createQueryBuilder("eleve");
    queryBuilder.select("eleve.idParent").where("eleve.id = :id", { id });
    const result = await queryBuilder.getRawOne();
    // eslint-disable-next-line eqeqeq
    if (result.idParent == parentId) {
      return true;
    }
    return false;
  }

  async isProfesseur(eleveId: number, professeurId: number) {
    const professeurs = await this.professeurRepository
      .createQueryBuilder("professeur")
      .select(["professeur.id"])
      .innerJoin(
        "professeur_classes_classe",
        "pcc",
        "pcc.professeurId = professeur.id",
      )
      .innerJoin("eleve", "eleve", "eleve.idClasse = pcc.classeId")
      .where("eleve.id = :eleveId", { eleveId })
      .getRawMany();
    const estPresent = professeurs.some(
      (row) => row.professeur_id === professeurId,
    );
    return estPresent;
  }
}
