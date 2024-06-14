import { Eleve } from "./entities/eleve.entity";
import { Repository } from "typeorm";
export declare class EleveService {
    private readonly eleveRepository;
    constructor(eleveRepository: Repository<Eleve>);
    findAll(): string;
    getElevesByParentId(parentId: number): Promise<Eleve[]>;
    findOne(id: number): Promise<Eleve>;
    CryptMDPEleve(): Promise<void>;
    hashPassword(password: string): Promise<string>;
    remove(id: number): string;
}
