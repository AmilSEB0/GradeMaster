import { ClasseService } from "./classe.service";
export declare class ClasseController {
    private readonly classeService;
    constructor(classeService: ClasseService);
    findAll(): string;
    findOne(id: string): string;
    remove(id: string): string;
}
