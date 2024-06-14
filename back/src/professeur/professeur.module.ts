import { Module } from "@nestjs/common";
import { ProfesseurService } from "./professeur.service";
import { ProfesseurController } from "./professeur.controller";
import { Professeur } from "./entities/professeur.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtModule } from "@nestjs/jwt";
import { secretOrKey } from "src/auth/secret";

@Module({
  imports: [
    JwtModule.register({
      secret: secretOrKey,
      signOptions: { expiresIn: "1h" },
    }),
    TypeOrmModule.forFeature([Professeur]),
  ],
  controllers: [ProfesseurController],
  providers: [ProfesseurService],
})
export class ProfesseurModule {}
