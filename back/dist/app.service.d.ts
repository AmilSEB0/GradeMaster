import { EntityManager } from "typeorm";
export declare class AppService {
    private readonly entityManager;
    constructor(entityManager: EntityManager);
    executeSQLFromFile(): Promise<any>;
    getHello(): string;
}
