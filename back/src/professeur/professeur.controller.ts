import { Controller, Get, Param, Delete } from "@nestjs/common";
import { ApiTags, ApiParam, ApiOkResponse, ApiNotFoundResponse, ApiNoContentResponse } from "@nestjs/swagger";
import { ProfesseurService } from "./professeur.service";

@ApiTags('Professeur')
@Controller("professeur")
export class ProfesseurController {
  constructor(private readonly professeurService: ProfesseurService) {}

  @Get()
  @ApiOkResponse({ description: 'Liste des professeurs récupérée avec succès.' }) // Ajouter une réponse Swagger pour la récupération réussie
  findAll() {
    return this.professeurService.findAll();
  }

  @Get(":id")
  @ApiParam({ name: 'id', description: 'ID du professeur' })
  @ApiOkResponse({ description: 'Détails du professeur récupérés avec succès.' }) // Ajouter une réponse Swagger pour la récupération réussie
  @ApiNotFoundResponse({ description: 'Professeur non trouvé.' }) // Ajouter une réponse Swagger pour le professeur non trouvé
  findOne(@Param("id") id: string) {
    return this.professeurService.findOne(id);
  }

  @Get("matiereId/:idProfesseur")
  @ApiParam({ name: 'idProfesseur', description: 'ID du professeur' })
  @ApiOkResponse({ description: 'ID de la matière du professeur récupéré avec succès.' }) // Ajouter une réponse Swagger pour la récupération réussie
  findMatiereofProfesseur(@Param("idProfesseur") idProfesseur: number) {
    return this.professeurService.findMatiereofProfesseur(idProfesseur);
  }

  @Delete(":id")
  @ApiParam({ name: 'id', description: 'ID du professeur' })
  @ApiOkResponse({ description: 'Le professeur a été supprimé avec succès.' }) // Ajouter une réponse Swagger pour la suppression réussie
  @ApiNotFoundResponse({ description: 'Professeur non trouvé.' }) // Ajouter une réponse Swagger pour le professeur non trouvé
  @ApiNoContentResponse({ description: 'Aucun contenu. Le professeur a déjà été supprimé.' }) // Ajouter une réponse Swagger pour l'absence de contenu lors de la suppression
  remove(@Param("id") id: string) {
    return this.professeurService.remove(+id);
  }

  @Get("/crypt/mdp")
  @ApiOkResponse({ description: 'Mot de passe du professeur crypté avec succès.' }) // Ajouter une réponse Swagger pour le cryptage réussi
  async CryptmdpProfesseur() {
    return this.professeurService.CryptMDPProfesseur();
  }
}
