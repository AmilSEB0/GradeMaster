"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEleveDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_eleve_dto_1 = require("./create-eleve.dto");
class UpdateEleveDto extends (0, mapped_types_1.PartialType)(create_eleve_dto_1.CreateEleveDto) {
}
exports.UpdateEleveDto = UpdateEleveDto;
//# sourceMappingURL=update-eleve.dto.js.map