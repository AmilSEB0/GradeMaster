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
exports.Note = void 0;
const eleve_entity_1 = require("../../eleve/entities/eleve.entity");
const professeur_entity_1 = require("../../professeur/entities/professeur.entity");
const typeorm_1 = require("typeorm");
let Note = class Note {
    getCoef() {
        return this.coef;
    }
    setCoef(coef) {
        this.coef = coef;
    }
    getNote() {
        return this.note;
    }
    setNote(note) {
        this.note = note;
    }
    getNom() {
        return this.nom;
    }
    setNom(nom) {
        this.nom = nom;
    }
    getidProfesseur() {
        return this.id_professeur;
    }
    setidProfesseur(id_professeur) {
        this.id_professeur = id_professeur;
    }
    getidEleve() {
        return this.id_eleve;
    }
    setidEleve(id_eleve) {
        this.id_eleve = id_eleve;
    }
};
exports.Note = Note;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Note.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Note.prototype, "coef", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Note.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Note.prototype, "nom", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => professeur_entity_1.Professeur, (professeur) => professeur.notes),
    (0, typeorm_1.JoinColumn)({ name: "idProfesseur" }),
    __metadata("design:type", professeur_entity_1.Professeur)
], Note.prototype, "id_professeur", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => eleve_entity_1.Eleve, (eleve) => eleve.notes),
    (0, typeorm_1.JoinColumn)({ name: "idEleve" }),
    __metadata("design:type", eleve_entity_1.Eleve)
], Note.prototype, "id_eleve", void 0);
exports.Note = Note = __decorate([
    (0, typeorm_1.Entity)()
], Note);
//# sourceMappingURL=note.entity.js.map