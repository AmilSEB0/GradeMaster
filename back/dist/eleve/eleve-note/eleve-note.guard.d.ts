import { CanActivate, ExecutionContext } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { Repository } from "typeorm";
import { Eleve } from "../entities/eleve.entity";
import { Professeur } from "src/professeur/entities/professeur.entity";
export declare class EleveNoteGuard implements CanActivate {
    private readonly jwtService;
    private readonly eleveRepository;
    private readonly professeurRepository;
    constructor(jwtService: JwtService, eleveRepository: Repository<Eleve>, professeurRepository: Repository<Professeur>);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
    linkBetweenParentAndEleve(id: number, parentId: number): Promise<boolean>;
    isProfesseur(eleveId: number, professeurId: number): Promise<boolean>;
}
