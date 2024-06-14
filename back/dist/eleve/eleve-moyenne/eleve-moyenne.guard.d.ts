import { CanActivate, ExecutionContext } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { Repository } from "typeorm";
import { Eleve } from "../entities/eleve.entity";
export declare class EleveMoyenneGuard implements CanActivate {
    private readonly jwtService;
    private readonly eleveRepository;
    constructor(jwtService: JwtService, eleveRepository: Repository<Eleve>);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
    findEleveByIdAndParentId(id: number, idParent: number): Promise<any>;
    linkBetweenParentAndEleve(id: number, parentId: number): Promise<boolean>;
}
