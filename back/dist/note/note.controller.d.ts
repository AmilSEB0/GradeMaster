import { NoteService } from "./note.service";
import { CreateNoteDto } from "./dto/create-note.dto";
import { UpdateNoteDto } from "./dto/update-note.dto";
export declare class NoteController {
    private readonly noteService;
    constructor(noteService: NoteService);
    create(createNoteDto: CreateNoteDto, professeurId: string): Promise<void>;
    findAll(): Promise<import("./entities/note.entity").Note[]>;
    findOne(id: number): Promise<import("./entities/note.entity").Note>;
    getNotesByEleveAndMatiere(eleveId: string, matiereId: number): Promise<any>;
    getMoyennesByEleve(eleveId: string): Promise<any>;
    getMoyenneClassesByProfesseur(professeurId: string): Promise<any[]>;
    calculerMoyenneClasseEleveByProfesseur(classeid: number, professeurId: string): Promise<any[]>;
    update(id: number, updateNoteDto: UpdateNoteDto): string;
    remove(id: number): string;
}
