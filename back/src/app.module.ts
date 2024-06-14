import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EleveModule } from "./eleve/eleve.module";
import { UtilisateurModule } from "./utilisateur/utilisateur.module";
import { ParentModule } from "./parent/parent.module";
import { ProfesseurModule } from "./professeur/professeur.module";
import { ClasseModule } from "./classe/classe.module";
import { MatiereModule } from "./matiere/matiere.module";
import { NoteModule } from "./note/note.module";
import { Eleve } from "./eleve/entities/eleve.entity";
import { Parent } from "./parent/entities/parent.entity";
import { Professeur } from "./professeur/entities/professeur.entity";
import { Classe } from "./classe/entities/classe.entity";
import { Matiere } from "./matiere/entities/matiere.entity";
import { Note } from "./note/entities/note.entity";
import { AuthModule } from "./auth/auth.module";
import { PassportModule } from "@nestjs/passport";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '172.26.0.2',
      port: 3306,
      username: 'user',
      password: 'user',
      database: 'grade-db',
      entities: [Eleve, Parent, Professeur, Classe, Matiere, Note],
      synchronize: true,
    }),         
    EleveModule,
    UtilisateurModule,
    ParentModule,
    ProfesseurModule,
    ClasseModule,
    MatiereModule,
    NoteModule,
    AuthModule,
    PassportModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
