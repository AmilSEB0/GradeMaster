import { Controller, Get } from "@nestjs/common";
import { ApiTags, ApiOkResponse } from "@nestjs/swagger";
import { ParentService } from "./parent.service";

@ApiTags('Parent')
@Controller("parent")
export class ParentController {
  constructor(private readonly parentService: ParentService) {}

  @Get()
  @ApiOkResponse({ description: 'Liste des parents récupérée avec succès.' }) // Ajouter une réponse Swagger pour la récupération réussie
  findAll() {
    return this.parentService.findAll();
  }

  @Get("/crypt/mdp")
  @ApiOkResponse({ description: 'Mot de passe du parent crypté avec succès.' }) // Ajouter une réponse Swagger pour le cryptage réussi
  async CryptmdpParent() {
    return this.parentService.CryptMDPParent();
  }
}
