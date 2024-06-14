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
exports.Parent = void 0;
const eleve_entity_1 = require("../../eleve/entities/eleve.entity");
const utilisateur_entity_1 = require("../../utilisateur/entities/utilisateur.entity");
const typeorm_1 = require("typeorm");
let Parent = class Parent extends utilisateur_entity_1.Utilisateur {
    getEleves() {
        return this.eleves;
    }
    setEleves(eleves) {
        this.eleves = eleves;
    }
};
exports.Parent = Parent;
__decorate([
    (0, typeorm_1.OneToMany)(() => eleve_entity_1.Eleve, (eleve) => eleve.id_parent),
    __metadata("design:type", Array)
], Parent.prototype, "eleves", void 0);
exports.Parent = Parent = __decorate([
    (0, typeorm_1.Entity)()
], Parent);
//# sourceMappingURL=parent.entity.js.map