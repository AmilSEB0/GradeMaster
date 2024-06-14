// eslint-disable-next-line prettier/prettier
import { Controller, Get, Param, Delete } from "@nestjs/common";
import { ApiTags, ApiOkResponse, ApiParam } from "@nestjs/swagger";
import { ClasseService } from "./classe.service";

@ApiTags('Classe')
@Controller("classe")
export class ClasseController {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly classeService: ClasseService) {}

  @Get()
  @ApiOkResponse({ description: 'Liste des classes récupérée avec succès.' }) // Ajouter une réponse Swagger pour la récupération réussie
  findAll() {
    return this.classeService.findAll();
  }

  @Get(":id")
  @ApiParam({ name: 'id', description: 'ID de la classe' })
  @ApiOkResponse({ description: 'Détails de la classe récupérés avec succès.' }) // Ajouter une réponse Swagger pour la récupération réussie
  findOne(@Param("id") id: string) {
    return this.classeService.findOne(+id);
  }

  @Delete(":id")
  @ApiParam({ name: 'id', description: 'ID de la classe' })
  @ApiOkResponse({ description: 'La classe a été supprimée avec succès.' }) // Ajouter une réponse Swagger pour la suppression réussie
  remove(@Param("id") id: string) {
    return this.classeService.remove(+id);
  }
}
