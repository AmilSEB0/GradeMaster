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
exports.EleveMoyenneGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const eleve_entity_1 = require("../entities/eleve.entity");
let EleveMoyenneGuard = class EleveMoyenneGuard {
    constructor(jwtService, eleveRepository) {
        this.jwtService = jwtService;
        this.eleveRepository = eleveRepository;
    }
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers["authorization"];
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return false;
        }
        const token = authHeader.split(" ")[1];
        try {
            const user = this.jwtService.verify(token);
            const eleveId = request.params.eleveId;
            if (user && user.role === 3) {
                if (user.id === eleveId) {
                    return true;
                }
            }
            else if (user && user.role === 2) {
                return this.linkBetweenParentAndEleve(eleveId, user.id).then();
            }
            return false;
        }
        catch (error) {
            return false;
        }
    }
    async findEleveByIdAndParentId(id, idParent) {
        const queryBuilder = this.eleveRepository.createQueryBuilder("eleve");
        queryBuilder
            .select("eleve.id")
            .where("eleve.idParent = :idParent", { idParent })
            .andWhere("eleve.id = :id", { id });
        const result = await queryBuilder.getRawOne();
        return result.id;
    }
    async linkBetweenParentAndEleve(id, parentId) {
        let queryBuilder = this.eleveRepository.createQueryBuilder("eleve");
        queryBuilder.select("eleve.idParent").where("eleve.id = :id", { id });
        const result = await queryBuilder.getRawOne();
        if (result.idParent == parentId) {
            return true;
        }
        return false;
    }
};
exports.EleveMoyenneGuard = EleveMoyenneGuard;
exports.EleveMoyenneGuard = EleveMoyenneGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(eleve_entity_1.Eleve)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        typeorm_2.Repository])
], EleveMoyenneGuard);
//# sourceMappingURL=eleve-moyenne.guard.js.map