import { ProfesseurService } from "./professeur.service";
export declare class ProfesseurController {
    private readonly professeurService;
    constructor(professeurService: ProfesseurService);
    findAll(): Promise<import("./entities/professeur.entity").Professeur[]>;
    findOne(id: string): Promise<import("./entities/professeur.entity").Professeur>;
    findMatiereofProfesseur(idProfesseur: number): Promise<any>;
    remove(id: string): string;
    CryptmdpProfesseur(): Promise<void>;
}
