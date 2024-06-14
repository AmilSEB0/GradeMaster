import { EleveService } from "./eleve.service";
export declare class EleveController {
    private readonly eleveService;
    constructor(eleveService: EleveService);
    findAll(): string;
    getElevesByParentId(parentId: number): Promise<import("./entities/eleve.entity").Eleve[]>;
    findOne(id: string): Promise<import("./entities/eleve.entity").Eleve>;
    remove(id: string): string;
    CryptmdpEleve(): Promise<void>;
}
