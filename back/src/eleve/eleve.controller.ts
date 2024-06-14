/* eslint-disable no-unused-vars */
import { Controller, Get, Param, Delete } from "@nestjs/common";
import { ApiTags, ApiOkResponse, ApiParam } from "@nestjs/swagger";
import { EleveService } from "./eleve.service";

@ApiTags('Eleve')
@Controller("eleve")
export class EleveController {
  constructor(private readonly eleveService: EleveService) {}

  @Get()
  @ApiOkResponse({ description: 'Liste des élèves récupérée avec succès.' }) // Ajouter une réponse Swagger pour la récupération réussie
  findAll() {
    return this.eleveService.findAll();
  }

  @Get("parent/:idParent")
  @ApiParam({ name: 'idParent', description: 'ID du parent' })
  @ApiOkResponse({ description: 'Liste des élèves associés au parent récupérée avec succès.' }) // Ajouter une réponse Swagger pour la récupération réussie
  async getElevesByParentId(@Param("idParent") parentId: number) {
    return this.eleveService.getElevesByParentId(parentId);
  }

  @Get(":id")
  @ApiParam({ name: 'id', description: 'ID de l\'élève' })
  @ApiOkResponse({ description: 'Détails de l\'élève récupérés avec succès.' }) // Ajouter une réponse Swagger pour la récupération réussie
  findOne(@Param("id") id: string) {
    return this.eleveService.findOne(+id);
  }

  @Delete(":id")
  @ApiParam({ name: 'id', description: 'ID de l\'élève' })
  @ApiOkResponse({ description: 'L\'élève a été supprimé avec succès.' }) // Ajouter une réponse Swagger pour la suppression réussie
  remove(@Param("id") id: string) {
    return this.eleveService.remove(+id);
  }

  @Get("/crypt/mdp")
  @ApiOkResponse({ description: 'Mot de passe de l\'élève crypté avec succès.' }) // Ajouter une réponse Swagger pour le cryptage réussi
  async CryptmdpEleve() {
    return this.eleveService.CryptMDPEleve();
  }
}
