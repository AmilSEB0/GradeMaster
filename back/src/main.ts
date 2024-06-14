import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as dotenv from "dotenv";

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: `http://localhost:${process.env.PORT_FRONT || 8084}`,
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle("API GradeMaster")
    .setDescription("Description de l'API GradeMaster")
    .setVersion("1.0")
    .addTag("api")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("swagger", app, document);

  await app.listen(process.env.EXPOSE_API || 3000);
}

bootstrap();
