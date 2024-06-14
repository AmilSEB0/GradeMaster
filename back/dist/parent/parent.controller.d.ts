import { ParentService } from "./parent.service";
export declare class ParentController {
    private readonly parentService;
    constructor(parentService: ParentService);
    findAll(): string;
    CryptmdpParent(): Promise<void>;
}
