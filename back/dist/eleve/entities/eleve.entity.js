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
exports.Eleve = void 0;
const typeorm_1 = require("typeorm");
const utilisateur_entity_1 = require("../../utilisateur/entities/utilisateur.entity");
const classe_entity_1 = require("../../classe/entities/classe.entity");
const parent_entity_1 = require("../../parent/entities/parent.entity");
const note_entity_1 = require("../../note/entities/note.entity");
let Eleve = class Eleve extends utilisateur_entity_1.Utilisateur {
    getidClasse() {
        return this.id_classe;
    }
    setidClasse(classe) {
        this.id_classe = classe;
    }
    getidParent() {
        return this.id_parent;
    }
    setidParent(parent) {
        this.id_parent = parent;
    }
    getNotes() {
        return this.notes;
    }
    setNotes(notes) {
        this.notes = notes;
    }
};
exports.Eleve = Eleve;
__decorate([
    (0, typeorm_1.ManyToOne)(() => classe_entity_1.Classe, (classe) => classe.eleves),
    (0, typeorm_1.JoinColumn)({ name: "idClasse" }),
    __metadata("design:type", classe_entity_1.Classe)
], Eleve.prototype, "id_classe", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => parent_entity_1.Parent, (parent) => parent.eleves),
    (0, typeorm_1.JoinColumn)({ name: "idParent" }),
    __metadata("design:type", parent_entity_1.Parent)
], Eleve.prototype, "id_parent", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => note_entity_1.Note, (note) => note.id_eleve),
    __metadata("design:type", Array)
], Eleve.prototype, "notes", void 0);
exports.Eleve = Eleve = __decorate([
    (0, typeorm_1.Entity)()
], Eleve);
//# sourceMappingURL=eleve.entity.js.map