import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
//import { secretOrKey } from "./secret";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Professeur } from "src/professeur/entities/professeur.entity";
import { Eleve } from "src/eleve/entities/eleve.entity";
import { Parent } from "src/parent/entities/parent.entity";
import { JwtAuthGuard } from "src/jwt-auth/jwt-auth.guard";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "./jwt.strategy";
import { secretOrKey } from "./secret";

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtAuthGuard, JwtStrategy],
  imports: [
    JwtModule.register({
      secret: secretOrKey,
      signOptions: { expiresIn: "1h" },
    }),
    TypeOrmModule.forFeature([Parent, Professeur, Eleve]),
    PassportModule.register({ defaultStrategy: "jwt" }),
  ],
})
export class AuthModule {}
