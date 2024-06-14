import { CreateNoteDto } from "./dto/create-note.dto";
import { UpdateNoteDto } from "./dto/update-note.dto";
import { Note } from "./entities/note.entity";
import { Repository } from "typeorm";
import { Matiere } from "src/matiere/entities/matiere.entity";
import { Professeur } from "src/professeur/entities/professeur.entity";
import { Classe } from "src/classe/entities/classe.entity";
import { Eleve } from "src/eleve/entities/eleve.entity";
import { EleveService } from "src/eleve/eleve.service";
import { ProfesseurService } from "src/professeur/professeur.service";
export declare class NoteService {
    private readonly noteRepository;
    private readonly matiereRepository;
    private readonly professeurRepository;
    private readonly classeRepository;
    private readonly eleveRepository;
    private readonly eleveService;
    private readonly professeurService;
    constructor(noteRepository: Repository<Note>, matiereRepository: Repository<Matiere>, professeurRepository: Repository<Professeur>, classeRepository: Repository<Classe>, eleveRepository: Repository<Eleve>, eleveService: EleveService, professeurService: ProfesseurService);
    getNotesByEleveAndMatiere(eleveId: string, matiereId: number): Promise<any>;
    private calculateMoyenne;
    findAll(): Promise<Note[]>;
    findOne(id: number): Promise<Note>;
    getMoyennesByEleve(eleveId: string): Promise<any>;
    getMoyennesByProfesseur(professeurId: string): Promise<any[]>;
    calculerMoyenneClasseEleveByProfesseur(classeId: number, professeurId: string): Promise<any[]>;
    create(createNoteDto: CreateNoteDto, professeurId: string): Promise<void>;
    update(id: number, updateNoteDto: UpdateNoteDto): string;
    remove(id: number): string;
}