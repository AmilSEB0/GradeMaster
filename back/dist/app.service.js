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
exports.AppService = void 0;
const fs = require("fs");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const path_1 = require("path");
let AppService = class AppService {
    constructor(entityManager) {
        this.entityManager = entityManager;
    }
    async executeSQLFromFile() {
        const filePath = (0, path_1.join)(__dirname, "..", "SQL", "import.sql");
        const sqlQuery = fs.readFileSync(filePath, "utf8");
        try {
            const result = await this.entityManager.query(sqlQuery);
            return result;
        }
        catch (error) {
            throw new Error(`Failed to execute SQL query: ${error.message}`);
        }
    }
    getHello() {
        return "Hello World!";
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.EntityManager])
], AppService);
//# sourceMappingURL=app.service.js.map