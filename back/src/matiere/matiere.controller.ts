import { Controller, Get, Param, Delete } from "@nestjs/common";
import { ApiTags, ApiParam, ApiOkResponse, ApiNotFoundResponse, ApiNoContentResponse } from "@nestjs/swagger";
import { MatiereService } from "./matiere.service";

@ApiTags('Matiere')
@Controller("matiere")
export class MatiereController {
  constructor(private readonly matiereService: MatiereService) {}

  @Get()
  @ApiOkResponse({ description: 'Liste des matières récupérée avec succès.' }) // Ajouter une réponse Swagger pour la récupération réussie
  findAll() {
    return this.matiereService.findAll();
  }

  @Get(":id")
  @ApiParam({ name: 'id', description: 'ID de la matière' })
  @ApiOkResponse({ description: 'Détails de la matière récupérés avec succès.' }) // Ajouter une réponse Swagger pour la récupération réussie
  @ApiNotFoundResponse({ description: 'Matière non trouvée.' }) // Ajouter une réponse Swagger pour la matière non trouvée
  findOne(@Param("id") id: string) {
    return this.matiereService.findOne(+id);
  }

  @Delete(":id")
  @ApiParam({ name: 'id', description: 'ID de la matière' })
  @ApiOkResponse({ description: 'La matière a été supprimée avec succès.' }) // Ajouter une réponse Swagger pour la suppression réussie
  @ApiNotFoundResponse({ description: 'Matière non trouvée.' }) // Ajouter une réponse Swagger pour la matière non trouvée
  @ApiNoContentResponse({ description: 'Aucun contenu. La matière a déjà été supprimée.' }) // Ajouter une réponse Swagger pour l'absence de contenu lors de la suppression
  remove(@Param("id") id: string) {
    return this.matiereService.remove(+id);
  }
}
