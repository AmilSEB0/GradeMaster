// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { ApiTags, ApiBearerAuth, ApiParam, ApiQuery, ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse } from "@nestjs/swagger";
import { NoteService } from "./note.service";
import { CreateNoteDto } from "./dto/create-note.dto";
import { UpdateNoteDto } from "./dto/update-note.dto";
import { JwtAuthGuard } from "src/jwt-auth/jwt-auth.guard";
import { ProfesseurGuard } from "src/professeur/professeur.guard";
import { EleveMoyenneGuard } from "src/eleve/eleve-moyenne/eleve-moyenne.guard";
import { EleveNoteGuard } from "src/eleve/eleve-note/eleve-note.guard";

@ApiBearerAuth()
@ApiTags('Note')
@UseGuards(JwtAuthGuard)
@Controller("note")
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @ApiTags('Professeur')
  @UseGuards(ProfesseurGuard)
  @Post(":professeurId")
  @ApiParam({ name: 'professeurId', description: 'ID du professeur' })
  @ApiCreatedResponse({ description: 'La note a été créée avec succès.' }) // Ajouter une réponse Swagger pour la création réussie
  @ApiForbiddenResponse({ description: 'Accès interdit. L\'utilisateur n\'est pas autorisé.' }) // Ajouter une réponse Swagger pour l'accès interdit
  create(
    @Body() createNoteDto: CreateNoteDto,
    @Param("professeurId") professeurId: string,
  ) {
    return this.noteService.create(createNoteDto, professeurId);
  }

  @Get()
  @ApiQuery({ name: 'id', type: 'number', description: 'ID de la note' })
  @ApiOkResponse({ description: 'Liste des notes récupérée avec succès.' }) // Ajouter une réponse Swagger pour la récupération réussie
  findAll() {
    return this.noteService.findAll();
  }

  @Get(":id")
  @ApiParam({ name: 'id', description: 'ID de la note' })
  @ApiOkResponse({ description: 'Détails de la note récupérés avec succès.' }) // Ajouter une réponse Swagger pour la récupération réussie
  findOne(@Param("id") id: number) {
    return this.noteService.findOne(+id);
  }

  @ApiTags('Eleve')
  @UseGuards(EleveNoteGuard)
  @Get("eleve/:eleveId/matiere/:matiereId")
  @ApiParam({ name: 'eleveId', description: 'ID de l\'élève' })
  @ApiParam({ name: 'matiereId', type: 'number', description: 'ID de la matière' })
  @ApiOkResponse({ description: 'Notes de l\'élève récupérées avec succès.' }) // Ajouter une réponse Swagger pour la récupération réussie
  getNotesByEleveAndMatiere(
    @Param("eleveId") eleveId: string,
    @Param("matiereId") matiereId: number,
  ) {
    return this.noteService.getNotesByEleveAndMatiere(eleveId, +matiereId);
  }

  @ApiTags('Eleve')
  @UseGuards(EleveMoyenneGuard)
  @Get("eleve/:eleveId/moyennes")
  @ApiParam({ name: 'eleveId', description: 'ID de l\'élève' })
  @ApiOkResponse({ description: 'Moyennes de l\'élève récupérées avec succès.' }) // Ajouter une réponse Swagger pour la récupération réussie
  getMoyennesByEleve(@Param("eleveId") eleveId: string) {
    return this.noteService.getMoyennesByEleve(eleveId);
  }

  @ApiTags('Professeur')
  @UseGuards(ProfesseurGuard)
  @Get("professeur/:professeurId/moyenneClasse")
  @ApiParam({ name: 'professeurId', description: 'ID du professeur' })
  @ApiOkResponse({ description: 'Moyennes de classe récupérées avec succès.' }) // Ajouter une réponse Swagger pour la récupération réussie
  getMoyenneClassesByProfesseur(@Param("professeurId") professeurId: string) {
    return this.noteService.getMoyennesByProfesseur(professeurId);
  }

  @ApiTags('Professeur')
  @UseGuards(ProfesseurGuard)
  @Get("moyenneEleve/classe/:classeid/professeur/:professeurId")
  @ApiParam({ name: 'classeid', type: 'number', description: 'ID de la classe' })
  @ApiParam({ name: 'professeurId', description: 'ID du professeur' })
  @ApiOkResponse({ description: 'Moyennes de classe et de l\'élève calculées avec succès.' }) // Ajouter une réponse Swagger pour le calcul réussi
  calculerMoyenneClasseEleveByProfesseur(
    @Param("classeid") classeid: number,
    @Param("professeurId") professeurId: string,
  ) {
    return this.noteService.calculerMoyenneClasseEleveByProfesseur(
      classeid,
      professeurId,
    );
  }

  @Patch(":id")
  @ApiParam({ name: 'id', description: 'ID de la note' })
  @ApiOkResponse({ description: 'La note a été mise à jour avec succès.' }) // Ajouter une réponse Swagger pour la mise à jour réussie
  update(@Param("id") id: number, @Body() updateNoteDto: UpdateNoteDto) {
    return this.noteService.update(+id, updateNoteDto);
  }

  @Delete(":id")
  @ApiParam({ name: 'id', description: 'ID de la note' })
  @ApiOkResponse({ description: 'La note a été supprimée avec succès.' }) // Ajouter une réponse Swagger pour la suppression réussie
  remove(@Param("id") id: number) {
    return this.noteService.remove(+id);
  }
}
