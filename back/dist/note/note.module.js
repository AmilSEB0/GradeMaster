"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteModule = void 0;
const common_1 = require("@nestjs/common");
const note_service_1 = require("./note.service");
const note_controller_1 = require("./note.controller");
const typeorm_1 = require("@nestjs/typeorm");
const note_entity_1 = require("./entities/note.entity");
const matiere_entity_1 = require("../matiere/entities/matiere.entity");
const matiere_service_1 = require("../matiere/matiere.service");
const professeur_entity_1 = require("../professeur/entities/professeur.entity");
const professeur_service_1 = require("../professeur/professeur.service");
const classe_entity_1 = require("../classe/entities/classe.entity");
const eleve_entity_1 = require("../eleve/entities/eleve.entity");
const eleve_service_1 = require("../eleve/eleve.service");
const jwt_1 = require("@nestjs/jwt");
const secret_1 = require("../auth/secret");
let NoteModule = class NoteModule {
};
exports.NoteModule = NoteModule;
exports.NoteModule = NoteModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                secret: secret_1.secretOrKey,
                signOptions: { expiresIn: "1h" },
            }),
            typeorm_1.TypeOrmModule.forFeature([note_entity_1.Note, matiere_entity_1.Matiere, professeur_entity_1.Professeur, classe_entity_1.Classe, eleve_entity_1.Eleve]),
        ],
        controllers: [note_controller_1.NoteController],
        providers: [note_service_1.NoteService, matiere_service_1.MatiereService, professeur_service_1.ProfesseurService, eleve_service_1.EleveService],
    })
], NoteModule);
//# sourceMappingURL=note.module.js.map