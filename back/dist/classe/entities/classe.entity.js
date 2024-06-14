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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Classe = void 0;
const eleve_entity_1 = require("../../eleve/entities/eleve.entity");
const professeur_entity_1 = require("../../professeur/entities/professeur.entity");
const typeorm_1 = require("typeorm");
let Classe = class Classe {
    getNom() {
        return this.nom;
    }
    setNom(nom) {
        this.nom = nom;
    }
    getEleves() {
        return this.eleves;
    }
    setEleves(eleves) {
        this.eleves = eleves;
    }
};
exports.Classe = Classe;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Classe.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Classe.prototype, "nom", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => eleve_entity_1.Eleve, (eleve) => eleve.id_classe),
    __metadata("design:type", Array)
], Classe.prototype, "eleves", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => professeur_entity_1.Professeur, (professeur) => professeur.classes),
    __metadata("design:type", Array)
], Classe.prototype, "professeurs", void 0);
exports.Classe = Classe = __decorate([
    (0, typeorm_1.Entity)()
], Classe);
//# sourceMappingURL=classe.entity.js.map