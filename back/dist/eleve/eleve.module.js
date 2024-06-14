"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EleveModule = void 0;
const common_1 = require("@nestjs/common");
const eleve_service_1 = require("./eleve.service");
const eleve_controller_1 = require("./eleve.controller");
const typeorm_1 = require("@nestjs/typeorm");
const eleve_entity_1 = require("./entities/eleve.entity");
let EleveModule = class EleveModule {
};
exports.EleveModule = EleveModule;
exports.EleveModule = EleveModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([eleve_entity_1.Eleve])],
        controllers: [eleve_controller_1.EleveController],
        providers: [eleve_service_1.EleveService],
    })
], EleveModule);
//# sourceMappingURL=eleve.module.js.map