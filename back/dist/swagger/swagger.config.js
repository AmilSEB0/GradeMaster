"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerConfig = void 0;
const swagger_1 = require("@nestjs/swagger");
const swaggerConfig = (app) => {
    const options = new swagger_1.DocumentBuilder()
        .setTitle('API GradeMaster')
        .setDescription('Description de l\'API GradeMaster')
        .setVersion('1.0')
        .addTag('api')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('swagger', app, document);
};
exports.swaggerConfig = swaggerConfig;
//# sourceMappingURL=swagger.config.js.map