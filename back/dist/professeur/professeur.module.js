"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfesseurModule = void 0;
const common_1 = require("@nestjs/common");
const professeur_service_1 = require("./professeur.service");
const professeur_controller_1 = require("./professeur.controller");
const professeur_entity_1 = require("./entities/professeur.entity");
const typeorm_1 = require("@nestjs/typeorm");
const jwt_1 = require("@nestjs/jwt");
const secret_1 = require("../auth/secret");
let ProfesseurModule = class ProfesseurModule {
};
exports.ProfesseurModule = ProfesseurModule;
exports.ProfesseurModule = ProfesseurModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                secret: secret_1.secretOrKey,
                signOptions: { expiresIn: "1h" },
            }),
            typeorm_1.TypeOrmModule.forFeature([professeur_entity_1.Professeur]),
        ],
        controllers: [professeur_controller_1.ProfesseurController],
        providers: [professeur_service_1.ProfesseurService],
    })
], ProfesseurModule);
//# sourceMappingURL=professeur.module.js.map