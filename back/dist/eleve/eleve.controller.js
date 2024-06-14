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
exports.EleveController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const eleve_service_1 = require("./eleve.service");
let EleveController = class EleveController {
    constructor(eleveService) {
        this.eleveService = eleveService;
    }
    findAll() {
        return this.eleveService.findAll();
    }
    async getElevesByParentId(parentId) {
        return this.eleveService.getElevesByParentId(parentId);
    }
    findOne(id) {
        return this.eleveService.findOne(+id);
    }
    remove(id) {
        return this.eleveService.remove(+id);
    }
    async CryptmdpEleve() {
        return this.eleveService.CryptMDPEleve();
    }
};
exports.EleveController = EleveController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({ description: 'Liste des élèves récupérée avec succès.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EleveController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("parent/:idParent"),
    (0, swagger_1.ApiParam)({ name: 'idParent', description: 'ID du parent' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Liste des élèves associés au parent récupérée avec succès.' }),
    __param(0, (0, common_1.Param)("idParent")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EleveController.prototype, "getElevesByParentId", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de l\'élève' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Détails de l\'élève récupérés avec succès.' }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EleveController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de l\'élève' }),
    (0, swagger_1.ApiOkResponse)({ description: 'L\'élève a été supprimé avec succès.' }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EleveController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)("/crypt/mdp"),
    (0, swagger_1.ApiOkResponse)({ description: 'Mot de passe de l\'élève crypté avec succès.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EleveController.prototype, "CryptmdpEleve", null);
exports.EleveController = EleveController = __decorate([
    (0, swagger_1.ApiTags)('Eleve'),
    (0, common_1.Controller)("eleve"),
    __metadata("design:paramtypes", [eleve_service_1.EleveService])
], EleveController);
//# sourceMappingURL=eleve.controller.js.map