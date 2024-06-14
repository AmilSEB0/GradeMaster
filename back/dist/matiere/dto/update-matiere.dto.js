"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMatiereDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_matiere_dto_1 = require("./create-matiere.dto");
class UpdateMatiereDto extends (0, mapped_types_1.PartialType)(create_matiere_dto_1.CreateMatiereDto) {
}
exports.UpdateMatiereDto = UpdateMatiereDto;
//# sourceMappingURL=update-matiere.dto.js.map