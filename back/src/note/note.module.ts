import { Module } from "@nestjs/common";
import { NoteService } from "./note.service";
import { NoteController } from "./note.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Note } from "./entities/note.entity";
import { Matiere } from "src/matiere/entities/matiere.entity";
import { MatiereService } from "src/matiere/matiere.service";
import { Professeur } from "src/professeur/entities/professeur.entity";
import { ProfesseurService } from "src/professeur/professeur.service";
import { Classe } from "src/classe/entities/classe.entity";
import { Eleve } from "src/eleve/entities/eleve.entity";
import { EleveService } from "src/eleve/eleve.service";
import { JwtModule } from "@nestjs/jwt";
import { secretOrKey } from "src/auth/secret";

@Module({
  imports: [
    JwtModule.register({
      secret: secretOrKey,
      signOptions: { expiresIn: "1h" },
    }),
    TypeOrmModule.forFeature([Note, Matiere, Professeur, Classe, Eleve]),
  ],
  controllers: [NoteController],
  providers: [NoteService, MatiereService, ProfesseurService, EleveService],
})
export class NoteModule {}
