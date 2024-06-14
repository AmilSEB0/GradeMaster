/* eslint-disable no-unused-vars */
import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Observable } from "rxjs";
import { Repository } from "typeorm";
import { Eleve } from "../entities/eleve.entity";

@Injectable()
export class EleveMoyenneGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(Eleve)
    private readonly eleveRepository: Repository<Eleve>,
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
      }

      return false;
    } catch (error) {
      return false;
    }
  }

  async findEleveByIdAndParentId(id: number, idParent: number) {
    const queryBuilder = this.eleveRepository.createQueryBuilder("eleve");
    queryBuilder
      .select("eleve.id")
      .where("eleve.idParent = :idParent", { idParent })
      .andWhere("eleve.id = :id", { id });
    const result = await queryBuilder.getRawOne();
    return result.id;
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
}
