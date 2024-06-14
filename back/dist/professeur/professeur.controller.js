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
exports.ProfesseurController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const professeur_service_1 = require("./professeur.service");
let ProfesseurController = class ProfesseurController {
    constructor(professeurService) {
        this.professeurService = professeurService;
    }
    findAll() {
        return this.professeurService.findAll();
    }
    findOne(id) {
        return this.professeurService.findOne(id);
    }
    findMatiereofProfesseur(idProfesseur) {
        return this.professeurService.findMatiereofProfesseur(idProfesseur);
    }
    remove(id) {
        return this.professeurService.remove(+id);
    }
    async CryptmdpProfesseur() {
        return this.professeurService.CryptMDPProfesseur();
    }
};
exports.ProfesseurController = ProfesseurController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({ description: 'Liste des professeurs récupérée avec succès.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProfesseurController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID du professeur' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Détails du professeur récupérés avec succès.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Professeur non trouvé.' }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProfesseurController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)("matiereId/:idProfesseur"),
    (0, swagger_1.ApiParam)({ name: 'idProfesseur', description: 'ID du professeur' }),
    (0, swagger_1.ApiOkResponse)({ description: 'ID de la matière du professeur récupéré avec succès.' }),
    __param(0, (0, common_1.Param)("idProfesseur")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProfesseurController.prototype, "findMatiereofProfesseur", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID du professeur' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Le professeur a été supprimé avec succès.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Professeur non trouvé.' }),
    (0, swagger_1.ApiNoContentResponse)({ description: 'Aucun contenu. Le professeur a déjà été supprimé.' }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProfesseurController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)("/crypt/mdp"),
    (0, swagger_1.ApiOkResponse)({ description: 'Mot de passe du professeur crypté avec succès.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProfesseurController.prototype, "CryptmdpProfesseur", null);
exports.ProfesseurController = ProfesseurController = __decorate([
    (0, swagger_1.ApiTags)('Professeur'),
    (0, common_1.Controller)("professeur"),
    __metadata("design:paramtypes", [professeur_service_1.ProfesseurService])
], ProfesseurController);
//# sourceMappingURL=professeur.controller.js.map