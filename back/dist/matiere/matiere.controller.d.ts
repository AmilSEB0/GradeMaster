import { MatiereService } from "./matiere.service";
export declare class MatiereController {
    private readonly matiereService;
    constructor(matiereService: MatiereService);
    findAll(): string;
    findOne(id: string): string;
    remove(id: string): string;
}
