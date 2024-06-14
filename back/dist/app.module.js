"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const eleve_module_1 = require("./eleve/eleve.module");
const utilisateur_module_1 = require("./utilisateur/utilisateur.module");
const parent_module_1 = require("./parent/parent.module");
const professeur_module_1 = require("./professeur/professeur.module");
const classe_module_1 = require("./classe/classe.module");
const matiere_module_1 = require("./matiere/matiere.module");
const note_module_1 = require("./note/note.module");
const eleve_entity_1 = require("./eleve/entities/eleve.entity");
const parent_entity_1 = require("./parent/entities/parent.entity");
const professeur_entity_1 = require("./professeur/entities/professeur.entity");
const classe_entity_1 = require("./classe/entities/classe.entity");
const matiere_entity_1 = require("./matiere/entities/matiere.entity");
const note_entity_1 = require("./note/entities/note.entity");
const auth_module_1 = require("./auth/auth.module");
const passport_1 = require("@nestjs/passport");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: '172.26.0.2',
                port: 3306,
                username: 'user',
                password: 'user',
                database: 'grade-db',
                entities: [eleve_entity_1.Eleve, parent_entity_1.Parent, professeur_entity_1.Professeur, classe_entity_1.Classe, matiere_entity_1.Matiere, note_entity_1.Note],
                synchronize: true,
            }),
            eleve_module_1.EleveModule,
            utilisateur_module_1.UtilisateurModule,
            parent_module_1.ParentModule,
            professeur_module_1.ProfesseurModule,
            classe_module_1.ClasseModule,
            matiere_module_1.MatiereModule,
            note_module_1.NoteModule,
            auth_module_1.AuthModule,
            passport_1.PassportModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map