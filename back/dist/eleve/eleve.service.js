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
exports.EleveService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const eleve_entity_1 = require("./entities/eleve.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
let EleveService = class EleveService {
    constructor(eleveRepository) {
        this.eleveRepository = eleveRepository;
    }
    findAll() {
        return `This action returns all eleve`;
    }
    async getElevesByParentId(parentId) {
        return this.eleveRepository
            .createQueryBuilder("eleve")
            .select(["eleve.id", "eleve.nom", "eleve.prenom"])
            .where("eleve.id_parent = :parentId", { parentId })
            .getMany();
    }
    findOne(id) {
        return this.eleveRepository.findOne({
            where: { id },
        });
    }
    async CryptMDPEleve() {
        const eleves = await this.eleveRepository.find();
        for (const eleve of eleves) {
            const hashedPassword = await this.hashPassword(eleve.motDePasse);
            eleve.motDePasse = hashedPassword;
            await this.eleveRepository.save(eleve);
        }
    }
    async hashPassword(password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword;
    }
    remove(id) {
        return `This action removes a #${id} eleve`;
    }
};
exports.EleveService = EleveService;
exports.EleveService = EleveService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(eleve_entity_1.Eleve)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EleveService);
//# sourceMappingURL=eleve.service.js.map