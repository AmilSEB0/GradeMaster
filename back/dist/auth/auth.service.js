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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const parent_entity_1 = require("../parent/entities/parent.entity");
const professeur_entity_1 = require("../professeur/entities/professeur.entity");
const eleve_entity_1 = require("../eleve/entities/eleve.entity");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(jwtService, parentRepository, professeurRepository, eleveRepository) {
        this.jwtService = jwtService;
        this.parentRepository = parentRepository;
        this.professeurRepository = professeurRepository;
        this.eleveRepository = eleveRepository;
    }
    async validateUser(email, motDePasse) {
        const parent = await this.parentRepository.findOne({
            where: { email },
        });
        const professeur = await this.professeurRepository.findOne({
            where: { email },
        });
        const eleve = await this.eleveRepository.findOne({
            where: { email },
        });
        if (parent) {
            const motDePasseCorrespondant = await bcrypt.compare(motDePasse, parent.motDePasse);
            if (!motDePasseCorrespondant) {
                throw new common_1.NotFoundException("Mot de passe incorrect");
            }
            return parent;
        }
        else if (professeur) {
            const motDePasseCorrespondant = await bcrypt.compare(motDePasse, professeur.motDePasse);
            if (!motDePasseCorrespondant) {
                throw new common_1.NotFoundException("Mot de passe incorrect");
            }
            return professeur;
        }
        else if (eleve) {
            const motDePasseCorrespondant = await bcrypt.compare(motDePasse, eleve.motDePasse);
            if (!motDePasseCorrespondant) {
                throw new common_1.NotFoundException("Mot de passe incorrect");
            }
            return eleve;
        }
        else {
            throw new common_1.NotFoundException("Utilisateur introuvable");
        }
    }
    async login(user) {
        const payload = {
            id: user.id,
            nom: user.nom,
            prenom: user.prenom,
            role: user.role,
        };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(parent_entity_1.Parent)),
    __param(2, (0, typeorm_1.InjectRepository)(professeur_entity_1.Professeur)),
    __param(3, (0, typeorm_1.InjectRepository)(eleve_entity_1.Eleve)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], AuthService);
//# sourceMappingURL=auth.service.js.map