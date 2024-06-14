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
exports.Professeur = void 0;
const classe_entity_1 = require("../../classe/entities/classe.entity");
const matiere_entity_1 = require("../../matiere/entities/matiere.entity");
const note_entity_1 = require("../../note/entities/note.entity");
const utilisateur_entity_1 = require("../../utilisateur/entities/utilisateur.entity");
const typeorm_1 = require("typeorm");
let Professeur = class Professeur extends utilisateur_entity_1.Utilisateur {
    getmatiere() {
        return this.id_matiere;
    }
    setmatiere(id_matiere) {
        this.id_matiere = id_matiere;
    }
    getClasses() {
        return this.classes;
    }
    setClasses(classes) {
        this.classes = classes;
    }
    getNotes() {
        return this.notes;
    }
    setNotes(notes) {
        this.notes = notes;
    }
};
exports.Professeur = Professeur;
__decorate([
    (0, typeorm_1.ManyToOne)(() => matiere_entity_1.Matiere, (matiere) => matiere.professeur),
    (0, typeorm_1.JoinColumn)({ name: "idMatiere" }),
    __metadata("design:type", matiere_entity_1.Matiere)
], Professeur.prototype, "id_matiere", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => classe_entity_1.Classe, (classe) => classe.professeurs),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Professeur.prototype, "classes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => note_entity_1.Note, (note) => note.id_professeur),
    __metadata("design:type", Array)
], Professeur.prototype, "notes", void 0);
exports.Professeur = Professeur = __decorate([
    (0, typeorm_1.Entity)()
], Professeur);
//# sourceMappingURL=professeur.entity.js.map