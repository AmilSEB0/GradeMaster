"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteService = void 0;
const common_1 = require("@nestjs/common");
const note_entity_1 = require("./entities/note.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const matiere_entity_1 = require("../matiere/entities/matiere.entity");
const professeur_entity_1 = require("../professeur/entities/professeur.entity");
const classe_entity_1 = require("../classe/entities/classe.entity");
const eleve_entity_1 = require("../eleve/entities/eleve.entity");
const eleve_service_1 = require("../eleve/eleve.service");
const professeur_service_1 = require("../professeur/professeur.service");
let NoteService = class NoteService {
    constructor(noteRepository, matiereRepository, professeurRepository, classeRepository, eleveRepository, eleveService, professeurService) {
        this.noteRepository = noteRepository;
        this.matiereRepository = matiereRepository;
        this.professeurRepository = professeurRepository;
        this.classeRepository = classeRepository;
        this.eleveRepository = eleveRepository;
        this.eleveService = eleveService;
        this.professeurService = professeurService;
    }
    async getNotesByEleveAndMatiere(eleveId, matiereId) {
        const notes = await this.noteRepository
            .createQueryBuilder("note")
            .leftJoinAndSelect("note.id_professeur", "professeur")
            .leftJoinAndSelect("professeur.id_matiere", "matiere")
            .leftJoinAndSelect("note.id_eleve", "eleve")
            .where("eleve.id = :eleveId", { eleveId })
            .andWhere("matiere.id = :matiereId", { matiereId })
            .getMany();
        const matiere = await this.matiereRepository
            .createQueryBuilder("matiere")
            .select("matiere.nom")
            .where("matiere.id = :id", { id: matiereId })
            .getRawOne();
        const professeur = await this.professeurRepository
            .createQueryBuilder("professeur")
            .select(["professeur.nom", "professeur.prenom"])
            .innerJoin("professeur_classes_classe", "professeur_classes", "professeur.id = professeur_classes.professeurId")
            .innerJoin("matiere", "matiere", "professeur.idMatiere = matiere.id")
            .innerJoin("eleve", "eleve", "eleve.idClasse = professeur_classes.classeId")
            .where("eleve.id = :eleveId", { eleveId })
            .andWhere("matiere.id = :matiereId", { matiereId })
            .getRawOne();
        return {
            notes: notes.map((note) => ({
                id: note.id,
                coef: note.coef,
                note: note.note,
                nom: note.nom,
            })),
            NomMatiere: matiere.matiere_nom,
            nomProfesseur: professeur.professeur_nom,
            prenomProfesseur: professeur.professeur_prenom,
            moyenne: this.calculateMoyenne(notes),
        };
    }
    calculateMoyenne(notes) {
        let sommeCoefficient = 0;
        let sommeNote = 0;
        if (notes.length > 0) {
            for (const note of notes) {
                sommeCoefficient += note.coef;
                sommeNote += note.coef * note.note;
            }
            return sommeCoefficient !== 0 ? sommeNote / sommeCoefficient : 0;
        }
        else {
            return "pas de note";
        }
    }
    findAll() {
        return this.noteRepository.find();
    }
    async findOne(id) {
        return this.noteRepository.findOne({
            where: { id },
        });
    }
    async getMoyennesByEleve(eleveId) {
        const professeurs = await this.professeurRepository
            .createQueryBuilder("professeur")
            .select([
            "professeur.id as idProfesseur",
            "professeur.prenom as prenomProfesseur",
            "professeur.nom as nomProfesseur",
        ])
            .innerJoin("professeur_classes_classe", "pcc", "pcc.professeurId = professeur.id")
            .innerJoin("eleve", "eleve", "eleve.idClasse = pcc.classeId")
            .where("eleve.id = :eleveId", { eleveId })
            .getRawMany();
        const moyennesParMatiere = [];
        let sommeCoefTotale = 0;
        let sommePondereeTotale = 0;
        let pasDeNote = true;
        for (const prof of professeurs) {
            const notes = await this.noteRepository
                .createQueryBuilder("note")
                .select([
                "matiere.id as idMatiere",
                "matiere.nom as nomMatiere",
                "SUM(note.coef) as sommeCoef",
                "SUM(note.coef * note.note) as sommePonderee",
                "professeur.id as idProfesseur",
                "professeur.prenom as prenomProfesseur",
                "professeur.nom as nomProfesseur",
            ])
                .innerJoin("note.id_professeur", "professeur")
                .innerJoin("professeur.id_matiere", "matiere")
                .where("note.id_eleve = :idEleve", { idEleve: eleveId })
                .andWhere("note.id_professeur = :profId", { profId: prof.idProfesseur })
                .groupBy("matiere.nom, professeur.id, professeur.prenom, professeur.nom")
                .getRawMany();
            const matiere = await this.professeurRepository
                .createQueryBuilder("professeur")
                .select(["matiere.id as idMatiere", "matiere.nom as nomMatiere"])
                .innerJoin("professeur.id_matiere", "matiere")
                .where("professeur.id = :professeurId", {
                professeurId: prof.idProfesseur,
            })
                .getRawOne();
            if (notes.length > 0) {
                moyennesParMatiere.push({
                    idMatiere: notes[0].idMatiere,
                    nomMatiere: notes[0].nomMatiere,
                    moyenne: parseFloat(notes[0]?.sommePonderee) /
                        parseFloat(notes[0].sommeCoef),
                    nomProfesseur: prof.nomProfesseur,
                    prenomProfesseur: prof.prenomProfesseur,
                });
                if (!isNaN(parseFloat(notes[0]?.sommeCoef))) {
                    sommeCoefTotale += parseFloat(notes[0]?.sommeCoef);
                }
                if (!isNaN(parseFloat(notes[0]?.sommePonderee))) {
                    sommePondereeTotale += parseFloat(notes[0]?.sommePonderee);
                }
                pasDeNote = false;
            }
            else {
                moyennesParMatiere.push({
                    idMatiere: matiere.idMatiere,
                    nomMatiere: matiere.nomMatiere,
                    moyenne: "pas de note",
                    nomProfesseur: prof.nomProfesseur,
                    prenomProfesseur: prof.prenomProfesseur,
                });
            }
        }
        let moyenneGenerale;
        if (moyennesParMatiere.length > 0) {
            if (sommeCoefTotale !== 0) {
                moyenneGenerale = sommePondereeTotale / sommeCoefTotale;
            }
            else {
                if (pasDeNote) {
                    moyenneGenerale = "pas de note";
                }
                else {
                    moyenneGenerale = 0;
                }
            }
        }
        else {
            moyenneGenerale = "pas de note";
        }
        return {
            moyennesParMatiere,
            moyenneGenerale,
        };
    }
    async getMoyennesByProfesseur(professeurId) {
        const classesEnseignees = await this.classeRepository
            .createQueryBuilder("classe")
            .innerJoin("classe.professeurs", "professeur")
            .where("professeur.id = :professeurId", { professeurId })
            .getMany();
        const moyennesParClasse = [];
        for (const classe of classesEnseignees) {
            const elevesClasse = await this.classeRepository
                .createQueryBuilder("classe")
                .innerJoinAndSelect("classe.eleves", "eleve")
                .where("classe.id = :classeId", { classeId: classe.id })
                .getOne();
            if (!elevesClasse) {
                moyennesParClasse.push({
                    idClasse: classe.id,
                    nomClasse: classe.nom,
                    moyenneClasse: "classe vide",
                });
                continue;
            }
            const eleveIds = elevesClasse.eleves.map((eleve) => eleve.id);
            const notesEleves = await this.noteRepository
                .createQueryBuilder("note")
                .where("note.id_eleve IN (:...eleveIds)", { eleveIds })
                .andWhere("note.id_professeur = :professeurId", { professeurId })
                .getMany();
            let moyenneClasse;
            if (notesEleves.length > 0) {
                const totalCoef = notesEleves.reduce((sum, note) => sum + note.coef, 0);
                const totalPonderee = notesEleves.reduce((sum, note) => sum + note.coef * note.note, 0);
                moyenneClasse = totalCoef !== 0 ? totalPonderee / totalCoef : 0;
            }
            else {
                moyenneClasse = "pas de note";
            }
            moyennesParClasse.push({
                idClasse: classe.id,
                nomClasse: classe.nom,
                moyenneClasse,
            });
        }
        const matiere = await this.professeurRepository
            .createQueryBuilder("professeur")
            .select(["matiere.id as idMatiere", "matiere.nom as nomMatiere"])
            .innerJoin("professeur.id_matiere", "matiere")
            .where("professeur.id = :professeurId", { professeurId })
            .getRawOne();
        moyennesParClasse.push({
            idMatiere: matiere.idMatiere,
            nomMatiere: matiere.nomMatiere,
        });
        return moyennesParClasse;
    }
    async calculerMoyenneClasseEleveByProfesseur(classeId, professeurId) {
        const eleves = await this.eleveRepository.find({
            where: {
                id_classe: { id: classeId },
            },
        });
        const numericIdProfesseur = parseInt(professeurId, 10);
        const moyennesEleves = await Promise.all(eleves.map(async (eleve) => {
            const notes = await this.noteRepository.find({
                where: {
                    id_eleve: { id: eleve.id },
                    id_professeur: { id: numericIdProfesseur },
                },
            });
            let moyenne;
            if (notes.length > 0) {
                const totalCoef = notes.reduce((sum, note) => sum + note.coef, 0);
                const totalPonderee = notes.reduce((sum, note) => sum + note.coef * note.note, 0);
                moyenne = totalCoef !== 0 ? totalPonderee / totalCoef : 0;
            }
            else {
                moyenne = "pas de note";
            }
            return {
                idEleve: eleve.id,
                nomEleve: eleve.nom,
                prenomEleve: eleve.prenom,
                moyenne,
            };
        }));
        return moyennesEleves;
    }
    async create(createNoteDto, professeurId) {
        const { coef, nom, eleves } = createNoteDto;
        const hasNullNote = eleves.some((eleveData) => eleveData.note === null || eleveData.note === undefined);
        if (hasNullNote) {
            throw new common_1.BadRequestException({
                message: "Toutes les notes doivent être renseignées.",
            });
        }
        const hasNegativeNote = eleves.some((eleveData) => eleveData.note < 0);
        if (hasNegativeNote) {
            throw new common_1.BadRequestException({
                message: "La note ne peut pas être négative.",
            });
        }
        const hasInvalidNote = eleves.some((eleveData) => eleveData.note > 20);
        if (hasInvalidNote) {
            throw new common_1.BadRequestException({
                message: "La note ne peut pas être supérieure à 20.",
            });
        }
        const notes = await Promise.all(eleves.map(async (eleveData) => {
            const eleve = await this.eleveService.findOne(eleveData.idEleve);
            if (!eleve) {
                throw new common_1.NotFoundException(`Élève non trouvé avec l'ID ${eleveData.idEleve}`);
            }
            const professeur = await this.professeurService.findOne(professeurId);
            if (!professeur) {
                throw new common_1.NotFoundException("Professeur non trouvé");
            }
            const note = new note_entity_1.Note();
            note.nom = nom;
            note.coef = coef;
            note.note = eleveData.note;
            note.id_professeur = professeur;
            note.id_eleve = eleve;
            return note;
        }));
        await this.noteRepository.save(notes);
    }
    update(id, updateNoteDto) {
        return `This action updates a #${id} note`;
    }
    remove(id) {
        return `This action removes a #${id} note`;
    }
};
exports.NoteService = NoteService;
exports.NoteService = NoteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(note_entity_1.Note)),
    __param(1, (0, typeorm_1.InjectRepository)(matiere_entity_1.Matiere)),
    __param(2, (0, typeorm_1.InjectRepository)(professeur_entity_1.Professeur)),
    __param(3, (0, typeorm_1.InjectRepository)(classe_entity_1.Classe)),
    __param(4, (0, typeorm_1.InjectRepository)(eleve_entity_1.Eleve)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        eleve_service_1.EleveService,
        professeur_service_1.ProfesseurService])
], NoteService);
//# sourceMappingURL=note.service.js.map