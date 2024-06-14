import { JwtService } from "@nestjs/jwt";
import { Repository } from "typeorm";
import { Parent } from "src/parent/entities/parent.entity";
import { Professeur } from "src/professeur/entities/professeur.entity";
import { Eleve } from "src/eleve/entities/eleve.entity";
export declare class AuthService {
    private readonly jwtService;
    private readonly parentRepository;
    private readonly professeurRepository;
    private readonly eleveRepository;
    constructor(jwtService: JwtService, parentRepository: Repository<Parent>, professeurRepository: Repository<Professeur>, eleveRepository: Repository<Eleve>);
    validateUser(email: string, motDePasse: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
