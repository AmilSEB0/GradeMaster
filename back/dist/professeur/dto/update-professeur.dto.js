"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfesseurDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_professeur_dto_1 = require("./create-professeur.dto");
class UpdateProfesseurDto extends (0, mapped_types_1.PartialType)(create_professeur_dto_1.CreateProfesseurDto) {
}
exports.UpdateProfesseurDto = UpdateProfesseurDto;
//# sourceMappingURL=update-professeur.dto.js.map