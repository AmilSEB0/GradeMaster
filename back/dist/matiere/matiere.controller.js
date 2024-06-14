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
exports.MatiereController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const matiere_service_1 = require("./matiere.service");
let MatiereController = class MatiereController {
    constructor(matiereService) {
        this.matiereService = matiereService;
    }
    findAll() {
        return this.matiereService.findAll();
    }
    findOne(id) {
        return this.matiereService.findOne(+id);
    }
    remove(id) {
        return this.matiereService.remove(+id);
    }
};
exports.MatiereController = MatiereController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({ description: 'Liste des matières récupérée avec succès.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MatiereController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la matière' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Détails de la matière récupérés avec succès.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Matière non trouvée.' }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MatiereController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la matière' }),
    (0, swagger_1.ApiOkResponse)({ description: 'La matière a été supprimée avec succès.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Matière non trouvée.' }),
    (0, swagger_1.ApiNoContentResponse)({ description: 'Aucun contenu. La matière a déjà été supprimée.' }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MatiereController.prototype, "remove", null);
exports.MatiereController = MatiereController = __decorate([
    (0, swagger_1.ApiTags)('Matiere'),
    (0, common_1.Controller)("matiere"),
    __metadata("design:paramtypes", [matiere_service_1.MatiereService])
], MatiereController);
//# sourceMappingURL=matiere.controller.js.map