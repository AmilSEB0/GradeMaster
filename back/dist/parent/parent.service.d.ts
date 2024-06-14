import { Repository } from "typeorm";
import { Parent } from "./entities/parent.entity";
export declare class ParentService {
    private readonly parentRepository;
    constructor(parentRepository: Repository<Parent>);
    findAll(): string;
    CryptMDPParent(): Promise<void>;
    hashPassword(password: string): Promise<string>;
}
