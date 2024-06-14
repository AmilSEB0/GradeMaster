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
exports.ClasseController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const classe_service_1 = require("./classe.service");
let ClasseController = class ClasseController {
    constructor(classeService) {
        this.classeService = classeService;
    }
    findAll() {
        return this.classeService.findAll();
    }
    findOne(id) {
        return this.classeService.findOne(+id);
    }
    remove(id) {
        return this.classeService.remove(+id);
    }
};
exports.ClasseController = ClasseController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({ description: 'Liste des classes récupérée avec succès.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClasseController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la classe' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Détails de la classe récupérés avec succès.' }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClasseController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la classe' }),
    (0, swagger_1.ApiOkResponse)({ description: 'La classe a été supprimée avec succès.' }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClasseController.prototype, "remove", null);
exports.ClasseController = ClasseController = __decorate([
    (0, swagger_1.ApiTags)('Classe'),
    (0, common_1.Controller)("classe"),
    __metadata("design:paramtypes", [classe_service_1.ClasseService])
], ClasseController);
//# sourceMappingURL=classe.controller.js.map