/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line prettier/prettier
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateNoteDto } from "./dto/create-note.dto";
import { UpdateNoteDto } from "./dto/update-note.dto";
import { Note } from "./entities/note.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Matiere } from "src/matiere/entities/matiere.entity";
import { Professeur } from "src/professeur/entities/professeur.entity";
import { Classe } from "src/classe/entities/classe.entity";
import { Eleve } from "src/eleve/entities/eleve.entity";
import { EleveService } from "src/eleve/eleve.service";
import { ProfesseurService } from "src/professeur/professeur.service";

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note)
    private readonly noteRepository: Repository<Note>,
    @InjectRepository(Matiere)
    private readonly matiereRepository: Repository<Matiere>,
    @InjectRepository(Professeur)
    private readonly professeurRepository: Repository<Professeur>,
    @InjectRepository(Classe)
    private readonly classeRepository: Repository<Classe>,
    @InjectRepository(Eleve)
    private readonly eleveRepository: Repository<Eleve>,
    private readonly eleveService: EleveService,
    private readonly professeurService: ProfesseurService,
  ) {}

  async getNotesByEleveAndMatiere(
    eleveId: string,
    matiereId: number,
  ): Promise<any> {
    // Utilisation du QueryBuilder pour récupérer les notes pour un élève et une matière donnés
    const notes = await this.noteRepository
      .createQueryBuilder("note")
      .leftJoinAndSelect("note.id_professeur", "professeur") // Jointure avec la table des professeurs
      .leftJoinAndSelect("professeur.id_matiere", "matiere") // Jointure avec la table des matières
      .leftJoinAndSelect("note.id_eleve", "eleve") // Jointure avec la table des élèves
      .where("eleve.id = :eleveId", { eleveId }) // Filtre par l'ID de l'élève
      .andWhere("matiere.id = :matiereId", { matiereId }) // Filtre par l'ID de la matière
      .getMany(); // Récupération des résultats

    // Récupération du nom de la matière
    const matiere = await this.matiereRepository
      .createQueryBuilder("matiere")
      .select("matiere.nom") // Sélectionne le nom de la matière
      .where("matiere.id = :id", { id: matiereId }) // Filtre sur l'ID de la matière
      .getRawOne(); // Exécute la requête et récupère le résultat

    // Récupération du prenom et le nom du professeur
    const professeur = await this.professeurRepository
      .createQueryBuilder("professeur")
      .select(["professeur.nom", "professeur.prenom"]) // Sélectionne le nom et le prénom du professeur
      .innerJoin(
        "professeur_classes_classe",
        "professeur_classes",
        "professeur.id = professeur_classes.professeurId",
      ) // Jointure avec la table professeur_classes_classe
      .innerJoin("matiere", "matiere", "professeur.idMatiere = matiere.id") // Jointure avec la table matiere
      .innerJoin(
        "eleve",
        "eleve",
        "eleve.idClasse = professeur_classes.classeId",
      ) // Jointure avec la table eleve
      .where("eleve.id = :eleveId", { eleveId }) // Filtre sur l'ID de l'élève
      .andWhere("matiere.id = :matiereId", { matiereId }) // Filtre sur l'ID de la matière
      .getRawOne(); // Exécute la requête et récupère le résultat

    return {
      // Retourne les notes et les informations associées
      notes: notes.map((note) => ({
        id: note.id,
        coef: note.coef,
        note: note.note,
        nom: note.nom,
      })),
      NomMatiere: matiere.matiere_nom,
      nomProfesseur: professeur.professeur_nom,
      prenomProfesseur: professeur.professeur_prenom,
      moyenne: this.calculateMoyenne(notes), // Calcul de la moyenne
    };
  }

  // Fonction privée pour calculer la moyenne
  private calculateMoyenne(notes: any[]): any {
    let sommeCoefficient = 0;
    let sommeNote = 0;

    if (notes.length > 0) {
      for (const note of notes) {
        sommeCoefficient += note.coef;
        sommeNote += note.coef * note.note;
      }

      return sommeCoefficient !== 0 ? sommeNote / sommeCoefficient : 0;
    } else {
      return "pas de note";
    }
  }

  findAll() {
    return this.noteRepository.find();
    //return `This action returns all note`;
  }

  async findOne(id: number): Promise<Note> {
    return this.noteRepository.findOne({
      where: { id },
    });
  }

  async getMoyennesByEleve(eleveId: string): Promise<any> {
    // Récupérer tous les professeurs associés à l'élève
    const professeurs = await this.professeurRepository
      .createQueryBuilder("professeur")
      .select([
        "professeur.id as idProfesseur",
        "professeur.prenom as prenomProfesseur",
        "professeur.nom as nomProfesseur",
      ])
      .innerJoin(
        "professeur_classes_classe",
        "pcc",
        "pcc.professeurId = professeur.id",
      )
      .innerJoin("eleve", "eleve", "eleve.idClasse = pcc.classeId")
      .where("eleve.id = :eleveId", { eleveId })
      .getRawMany();

    const moyennesParMatiere = [];
    let sommeCoefTotale = 0;
    let sommePondereeTotale = 0;
    let pasDeNote = true; // Indique si l'élève n'a pas de notes

    for (const prof of professeurs) {
      // Récupérer les notes dé l'élève pour ce professeur
      const notes = await this.noteRepository
        .createQueryBuilder("note")
        .select([
          "matiere.id as idMatiere",
          "matiere.nom as nomMatiere",
          "SUM(note.coef) as sommeCoef",
          "SUM(note.coef * note.note) as sommePonderee",
          "professeur.id as idProfesseur",
          "professeur.prenom as prenomProfesseur",
          "professeur.nom as nomProfesseur",
        ])
        .innerJoin("note.id_professeur", "professeur") // Jointure avec la table des professeurs
        .innerJoin("professeur.id_matiere", "matiere") // Jointure avec la table des matières
        .where("note.id_eleve = :idEleve", { idEleve: eleveId }) // Filtre par l'ID de l'élève
        .andWhere("note.id_professeur = :profId", { profId: prof.idProfesseur })
        .groupBy(
          "matiere.nom, professeur.id, professeur.prenom, professeur.nom",
        ) // Groupement par matière et professeur
        .getRawMany(); // Récupération des résultats au format brut

      const matiere = await this.professeurRepository
        .createQueryBuilder("professeur")
        .select(["matiere.id as idMatiere", "matiere.nom as nomMatiere"])
        .innerJoin("professeur.id_matiere", "matiere")
        .where("professeur.id = :professeurId", {
          professeurId: prof.idProfesseur,
        })
        .getRawOne();

      if (notes.length > 0) {
        // L'élève a des notes pour cette matière
        moyennesParMatiere.push({
          idMatiere: notes[0].idMatiere,
          nomMatiere: notes[0].nomMatiere,
          // eslint-disable-next-line prettier/prettier
          moyenne:
            parseFloat(notes[0]?.sommePonderee) /
            parseFloat(notes[0].sommeCoef),
          nomProfesseur: prof.nomProfesseur,
          prenomProfesseur: prof.prenomProfesseur,
        });

        // Mettre à jour les sommes des coefficients et des pondérations
        if (!isNaN(parseFloat(notes[0]?.sommeCoef))) {
          sommeCoefTotale += parseFloat(notes[0]?.sommeCoef);
        }

        if (!isNaN(parseFloat(notes[0]?.sommePonderee))) {
          sommePondereeTotale += parseFloat(notes[0]?.sommePonderee);
        }

        pasDeNote = false; // Il y a des notes
      } else {
        // L'élève n'a pas de note pour cette matière
        moyennesParMatiere.push({
          idMatiere: matiere.idMatiere,
          nomMatiere: matiere.nomMatiere,
          moyenne: "pas de note",
          nomProfesseur: prof.nomProfesseur,
          prenomProfesseur: prof.prenomProfesseur,
        });
      }
    }

    let moyenneGenerale;

    if (moyennesParMatiere.length > 0) {
      if (sommeCoefTotale !== 0) {
        moyenneGenerale = sommePondereeTotale / sommeCoefTotale;
      } else {
        if (pasDeNote) {
          moyenneGenerale = "pas de note";
        } else {
          moyenneGenerale = 0;
        }
      }
    } else {
      // L'élève n'a pas de notes du tout
      moyenneGenerale = "pas de note";
    }

    return {
      moyennesParMatiere,
      moyenneGenerale,
    };
  }

  async getMoyennesByProfesseur(professeurId: string): Promise<any[]> {
    // Récupérer les classes enseignées par le professeur
    const classesEnseignees = await this.classeRepository
      .createQueryBuilder("classe")
      .innerJoin("classe.professeurs", "professeur")
      .where("professeur.id = :professeurId", { professeurId })
      .getMany();

    // Tableau pour stocker les moyennes par classe
    const moyennesParClasse = [];

    // Pour chaque classe enseignée par le professeur
    for (const classe of classesEnseignees) {
      // Récupérer les élèves de la classe
      const elevesClasse = await this.classeRepository
        .createQueryBuilder("classe")
        .innerJoinAndSelect("classe.eleves", "eleve")
        .where("classe.id = :classeId", { classeId: classe.id })
        .getOne();

      // Vérifier s'il y a des élèves dans la classe
      if (!elevesClasse) {
        moyennesParClasse.push({
          idClasse: classe.id,
          nomClasse: classe.nom,
          moyenneClasse: "classe vide", //0ab282a8-732d-11ee-b709-0242ac190002
        });
        continue; // Passer à la classe suivante si aucun élève
      }

      // Obtenir les IDs des élèves de la classe
      const eleveIds = elevesClasse.eleves.map((eleve) => eleve.id);

      // Récupérer les notes des élèves de la classe enseignée par le professeur
      const notesEleves = await this.noteRepository
        .createQueryBuilder("note") // Crée un query builder pour l'entité 'note'
        .where("note.id_eleve IN (:...eleveIds)", { eleveIds }) // Filtre les notes en fonction des IDs d'élèves fournis
        .andWhere("note.id_professeur = :professeurId", { professeurId }) // Filtre les notes en fonction de l'ID du professeur
        .getMany(); // Exécute la requête et récupère les résultats sous forme de tableau

      let moyenneClasse; // Variable pour stocker la moyenne de la classe

      // Vérifie s'il y a des notes pour les élèves de la classe
      if (notesEleves.length > 0) {
        // Calculer la moyenne de la classe
        const totalCoef = notesEleves.reduce((sum, note) => sum + note.coef, 0); // Calcule la somme des coefficients des notes
        // eslint-disable-next-line prettier/prettier
        const totalPonderee = notesEleves.reduce(
          (sum, note) => sum + note.coef * note.note,
          0,
        ); // Calcule la somme pondérée des notes
        moyenneClasse = totalCoef !== 0 ? totalPonderee / totalCoef : 0; // Calcule la moyenne pondérée si les coefficients sont non nuls, sinon renvoie 0
      } else {
        moyenneClasse = "pas de note"; // Affecte 'pas de note' si aucune note n'a été trouvée pour les élèves de la classe
      }

      // Stocker les informations de moyenne par classe dans le tableau
      moyennesParClasse.push({
        idClasse: classe.id,
        nomClasse: classe.nom,
        moyenneClasse,
      });
    }
    // Récupérer l'id et le nom de la matière qu'enseigne le professeur
    const matiere = await this.professeurRepository
      .createQueryBuilder("professeur")
      .select(["matiere.id as idMatiere", "matiere.nom as nomMatiere"])
      .innerJoin("professeur.id_matiere", "matiere")
      .where("professeur.id = :professeurId", { professeurId })
      .getRawOne();

    moyennesParClasse.push({
      idMatiere: matiere.idMatiere,
      nomMatiere: matiere.nomMatiere,
    });

    // Retourner les moyennes par classe
    return moyennesParClasse;
  }

  // eslint-disable-next-line prettier/prettier
  async calculerMoyenneClasseEleveByProfesseur(
    classeId: number,
    professeurId: string,
  ): Promise<any[]> {
    // Récupérer les élèves de la classe donnée
    const eleves = await this.eleveRepository.find({
      where: {
        id_classe: { id: classeId }, // Filtrer par l'ID de la classe
      },
    });
    const numericIdProfesseur = parseInt(professeurId, 10);
    // Calculer les moyennes pour chaque élève
    const moyennesEleves = await Promise.all(
      eleves.map(async (eleve) => {
        // Récupérer les notes de l'élève pour le professeur donné
        const notes = await this.noteRepository.find({
          where: {
            id_eleve: { id: eleve.id }, // Filtrer par l'ID de l'élève
            id_professeur: { id: numericIdProfesseur }, // Filtrer par l'ID du professeur
          },
        });

        let moyenne; // Variable pour stocker la moyenne de l'élève

        if (notes.length > 0) {
          // Calculer la moyenne pour l'élève
          const totalCoef = notes.reduce((sum, note) => sum + note.coef, 0); // Calcule la somme des coefficients des notes
          // eslint-disable-next-line prettier/prettier
          const totalPonderee = notes.reduce(
            (sum, note) => sum + note.coef * note.note,
            0,
          ); // Calcule la somme pondérée des notes
          moyenne = totalCoef !== 0 ? totalPonderee / totalCoef : 0; // Calcule la moyenne pondérée si les coefficients sont non nuls, sinon renvoie 0
        } else {
          moyenne = "pas de note"; // Affecte 'pas de note' si aucune note n'a été trouvée pour l'élève
        }

        return {
          idEleve: eleve.id, // ID de l'élève
          nomEleve: eleve.nom, // Nom de l'élève
          prenomEleve: eleve.prenom, // Prénom de l'élève
          moyenne, // Moyenne de l'élève
        };
      }),
    );

    return moyennesEleves; // Retourner les moyennes pour chaque élève
  }
  // eslint-disable-next-line prettier/prettier
  async create(createNoteDto: CreateNoteDto, professeurId: string): Promise<void> {
    // Extraction des propriétés du DTO
    const { coef, nom, eleves } = createNoteDto;

    // Vérifier s'il y a des notes nulles ou non définies
    // eslint-disable-next-line prettier/prettier
    const hasNullNote = eleves.some(
      (eleveData) => eleveData.note === null || eleveData.note === undefined,
    );
    if (hasNullNote) {
      // Lancer une exception BadRequest si des notes sont nulles ou non définies
      throw new BadRequestException({
        message: "Toutes les notes doivent être renseignées.",
      });
    }

    // Vérifier si une note est négative
    const hasNegativeNote = eleves.some((eleveData) => eleveData.note < 0);
    if (hasNegativeNote) {
      // Lancer une exception BadRequest si une note est négative
      throw new BadRequestException({
        message: "La note ne peut pas être négative.",
      });
    }

    // Vérifier si une note est supérieur à 20
    const hasInvalidNote = eleves.some((eleveData) => eleveData.note > 20);
    if (hasInvalidNote) {
      // Lancer une exception BadRequest si une note est supérieure à 20
      throw new BadRequestException({
        message: "La note ne peut pas être supérieure à 20.",
      });
    }

    // Création des notes en parallèle
    const notes = await Promise.all(
      eleves.map(async (eleveData) => {
        // Recherche de l'élève correspondant à l'ID
        const eleve = await this.eleveService.findOne(eleveData.idEleve);

        if (!eleve) {
          // Lancer une exception NotFound si l'élève n'est pas trouvé
          throw new NotFoundException(
            `Élève non trouvé avec l'ID ${eleveData.idEleve}`,
          );
        }

        // Recherche du professeur correspondant à l'ID
        const professeur = await this.professeurService.findOne(professeurId);

        if (!professeur) {
          // Lancer une exception NotFound si le professeur n'est pas trouvé
          throw new NotFoundException("Professeur non trouvé");
        }

        // Création d'une nouvelle note
        const note = new Note();
        note.nom = nom;
        note.coef = coef;
        note.note = eleveData.note;
        note.id_professeur = professeur;
        note.id_eleve = eleve;
        return note;
      }),
    );

    // Sauvegarde des notes dans la base de données
    await this.noteRepository.save(notes);
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    return `This action updates a #${id} note`;
  }

  remove(id: number) {
    return `This action removes a #${id} note`;
  }
}
