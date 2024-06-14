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
exports.NoteController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const note_service_1 = require("./note.service");
const create_note_dto_1 = require("./dto/create-note.dto");
const update_note_dto_1 = require("./dto/update-note.dto");
const jwt_auth_guard_1 = require("../jwt-auth/jwt-auth.guard");
const professeur_guard_1 = require("../professeur/professeur.guard");
const eleve_moyenne_guard_1 = require("../eleve/eleve-moyenne/eleve-moyenne.guard");
const eleve_note_guard_1 = require("../eleve/eleve-note/eleve-note.guard");
let NoteController = class NoteController {
    constructor(noteService) {
        this.noteService = noteService;
    }
    create(createNoteDto, professeurId) {
        return this.noteService.create(createNoteDto, professeurId);
    }
    findAll() {
        return this.noteService.findAll();
    }
    findOne(id) {
        return this.noteService.findOne(+id);
    }
    getNotesByEleveAndMatiere(eleveId, matiereId) {
        return this.noteService.getNotesByEleveAndMatiere(eleveId, +matiereId);
    }
    getMoyennesByEleve(eleveId) {
        return this.noteService.getMoyennesByEleve(eleveId);
    }
    getMoyenneClassesByProfesseur(professeurId) {
        return this.noteService.getMoyennesByProfesseur(professeurId);
    }
    calculerMoyenneClasseEleveByProfesseur(classeid, professeurId) {
        return this.noteService.calculerMoyenneClasseEleveByProfesseur(classeid, professeurId);
    }
    update(id, updateNoteDto) {
        return this.noteService.update(+id, updateNoteDto);
    }
    remove(id) {
        return this.noteService.remove(+id);
    }
};
exports.NoteController = NoteController;
__decorate([
    (0, swagger_1.ApiTags)('Professeur'),
    (0, common_1.UseGuards)(professeur_guard_1.ProfesseurGuard),
    (0, common_1.Post)(":professeurId"),
    (0, swagger_1.ApiParam)({ name: 'professeurId', description: 'ID du professeur' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'La note a été créée avec succès.' }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Accès interdit. L\'utilisateur n\'est pas autorisé.' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("professeurId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_note_dto_1.CreateNoteDto, String]),
    __metadata("design:returntype", void 0)
], NoteController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({ name: 'id', type: 'number', description: 'ID de la note' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Liste des notes récupérée avec succès.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NoteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la note' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Détails de la note récupérés avec succès.' }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], NoteController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiTags)('Eleve'),
    (0, common_1.UseGuards)(eleve_note_guard_1.EleveNoteGuard),
    (0, common_1.Get)("eleve/:eleveId/matiere/:matiereId"),
    (0, swagger_1.ApiParam)({ name: 'eleveId', description: 'ID de l\'élève' }),
    (0, swagger_1.ApiParam)({ name: 'matiereId', type: 'number', description: 'ID de la matière' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Notes de l\'élève récupérées avec succès.' }),
    __param(0, (0, common_1.Param)("eleveId")),
    __param(1, (0, common_1.Param)("matiereId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], NoteController.prototype, "getNotesByEleveAndMatiere", null);
__decorate([
    (0, swagger_1.ApiTags)('Eleve'),
    (0, common_1.UseGuards)(eleve_moyenne_guard_1.EleveMoyenneGuard),
    (0, common_1.Get)("eleve/:eleveId/moyennes"),
    (0, swagger_1.ApiParam)({ name: 'eleveId', description: 'ID de l\'élève' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Moyennes de l\'élève récupérées avec succès.' }),
    __param(0, (0, common_1.Param)("eleveId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NoteController.prototype, "getMoyennesByEleve", null);
__decorate([
    (0, swagger_1.ApiTags)('Professeur'),
    (0, common_1.UseGuards)(professeur_guard_1.ProfesseurGuard),
    (0, common_1.Get)("professeur/:professeurId/moyenneClasse"),
    (0, swagger_1.ApiParam)({ name: 'professeurId', description: 'ID du professeur' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Moyennes de classe récupérées avec succès.' }),
    __param(0, (0, common_1.Param)("professeurId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NoteController.prototype, "getMoyenneClassesByProfesseur", null);
__decorate([
    (0, swagger_1.ApiTags)('Professeur'),
    (0, common_1.UseGuards)(professeur_guard_1.ProfesseurGuard),
    (0, common_1.Get)("moyenneEleve/classe/:classeid/professeur/:professeurId"),
    (0, swagger_1.ApiParam)({ name: 'classeid', type: 'number', description: 'ID de la classe' }),
    (0, swagger_1.ApiParam)({ name: 'professeurId', description: 'ID du professeur' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Moyennes de classe et de l\'élève calculées avec succès.' }),
    __param(0, (0, common_1.Param)("classeid")),
    __param(1, (0, common_1.Param)("professeurId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], NoteController.prototype, "calculerMoyenneClasseEleveByProfesseur", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la note' }),
    (0, swagger_1.ApiOkResponse)({ description: 'La note a été mise à jour avec succès.' }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_note_dto_1.UpdateNoteDto]),
    __metadata("design:returntype", void 0)
], NoteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la note' }),
    (0, swagger_1.ApiOkResponse)({ description: 'La note a été supprimée avec succès.' }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], NoteController.prototype, "remove", null);
exports.NoteController = NoteController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Note'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)("note"),
    __metadata("design:paramtypes", [note_service_1.NoteService])
], NoteController);
//# sourceMappingURL=note.controller.js.map