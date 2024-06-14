import { Repository } from "typeorm";
import { Professeur } from "./entities/professeur.entity";
export declare class ProfesseurService {
    private readonly professeurRepository;
    constructor(professeurRepository: Repository<Professeur>);
    findAll(): Promise<Professeur[]>;
    findMatiereofProfesseur(idProfesseur: number): Promise<any>;
    findOne(id: string): Promise<Professeur>;
    CryptMDPProfesseur(): Promise<void>;
    hashPassword(password: string): Promise<string>;
    remove(id: number): string;
}
