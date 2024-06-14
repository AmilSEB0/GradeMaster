import { Component, OnInit } from '@angular/core';
import { NoteService } from '../service/note.service';
import { ProfesseurService } from '../service/professeur.service';
import { NavController } from '@ionic/angular';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ICreatenote } from '../interfaces/icreatenote';
import Swal from 'sweetalert2';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moyenne-classe',
  templateUrl: './moyenne-classe.page.html',
  styleUrls: ['./moyenne-classe.page.scss'],
})
export class MoyenneClassePage implements OnInit {
  classe: any;
  moyenneEleve: any;
  idMatiere: any;
  isModalOpen = false;
  decodedToken: any
  elevesSansNote: number[] = [];
  isFormSubmitted = false;
  tokken: any;

noteForm = new FormGroup({
  nomDevoir: new FormControl(),
  coefficient: new FormControl(),
});

items: { id: number; nomEleve: string; prenomEleve: string; note: number; moyenne: number; isNoteDisabled: boolean }[] = [];

  constructor(
    private noteservcies: NoteService,
    private professeurservice: ProfesseurService,
    private nav: NavController,
    private formBuilder: FormBuilder,
    private authservice: AuthService,
    private router: Router
  ) {
    this.noteForm = this.formBuilder.group({
      nomDevoir: ['', Validators.required],
      coefficient: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }

  ngOnInit() {
    this.classe = history.state.item;
    console.log(this.classe);
    this.decodedToken = this.authservice.getDecodedToken();

    this.getMoyenneClasseEleveByProfesseur(this.classe)

    this.ajouterItem()

  }

  getMoyenneClasseEleveByProfesseur(Utilisateur: any){
    this.tokken = this.authservice.getToken()

    this.noteservcies.calculerMoyenneClasseEleveByProfesseur(Utilisateur.idclasse, this.decodedToken.id, this.tokken)
      .subscribe(data => {
        this.moyenneEleve = data;
        console.log("skl")
        console.log(this.moyenneEleve);
        console.log("lcjdskjgvdjhkdvcbnkldchb j")
        this.items = this.moyenneEleve.map((item: any ) => ({
          id: item.idEleve,
          nomEleve: item.nomEleve,
          prenomEleve: item.prenomEleve,
          moyenne: item.moyenne
        }));
      });

    this.professeurservice.findMatiereofProfesseur(this.decodedToken.id)
      .subscribe(data => {
        this.idMatiere = data;
      });
  }

  VoirNoteEleve(eleve_choisie: any) {
    let idMatiere = this.idMatiere;

    const eleve = {
      idUtilisateur: eleve_choisie.idEleve,
      nomUtilisateur: eleve_choisie.nomEleve,
      prenomUtilisateur: eleve_choisie.prenomEleve,
      idMatiere: idMatiere
    };

    console.log(eleve);
    this.nav.navigateForward('/note', { state: { item: eleve } });
  }

  OuvrirModalAjoutNote() {
    this.isModalOpen = !this.isModalOpen;
  }

  ajouterItem() {  
    if (this.moyenneEleve) {
      this.items = this.moyenneEleve.map((note: any) => ({
        id: note.idEleve,
        note: '',
        nomEleve: note.nomEleve,
        prenomEleve: note.prenomEleve,
        isNoteDisabled: false  
      }));
      console.log("this.items")
      console.log(this.items);
      console.log("this.items")
    }
  }  
 
  getStudentName(id: number): string {
    const student = this.moyenneEleve.find((person: any) => person.idEleve === id);
    return student ? `${student.nomEleve} ${student.prenomEleve}` : '';
  }

  afficherDansConsole() {
    const formattedItems = this.items.map(item => ({ idEleve: item.id, note: item.note }));
    console.log(formattedItems);
  }

  submitForm() {
    if (this.noteForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Formulaire invalide',
        text: 'Le coefficient doit être un chiffre',
        heightAuto: false,
      });
    } else {
      const createNote: ICreatenote = {
        coef: this.noteForm.value.coefficient,
        nom: this.noteForm.value.nomDevoir,
        eleves: this.items
          .filter(item => !item.isNoteDisabled) 
          .map(item => ({ idEleve: item.id, note: item.note }))
      };
      this.tokken = this.authservice.getToken()
  
      this.noteservcies.addNote(createNote, this.decodedToken.id, this.tokken).subscribe({
        next: () => {
          Swal.fire({
            title: 'Notes ajoutées avec succès',
            imageUrl: 'https://media2.giphy.com/media/psmj7c3DbrJKkbRYFj/giphy.gif?cid=ecf05e47nz55c47gwxlqrjr32icatym9oxpsl7ktxwhgnm2c&ep=v1_gifs_search&rid=giphy.gif&ct=g',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'note ajoutée avec succès',
            heightAuto: false,
          }).then((result) => {
            if (result.isConfirmed) {
              this.noteForm.reset();
              this.items = this.moyenneEleve.map((note: any) => ({ id: note.idEleve, note: '' }));
              this.OuvrirModalAjoutNote();
              this.getMoyenneClasseEleveByProfesseur(this.classe);
            }
          });
        },
        error: (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Erreur',
            text: 'Erreur lors de l\'ajout de la note : ' + error.error.message,
            heightAuto: false,
          });
          this.markElevesSansNote();
        },
        complete: () => {
          
        }
      });
    }
  }

  isNumeric(value: any): boolean {
    if (value !== undefined && value !== null) {
      return /^\d+$/.test(value);
    } else {
      return false;
    }
  }  
  
  
  toggleNoteDisable(item: any) {
    if (item.isNoteDisabled) {
      item.note = null;
    }
    item.isNoteDisabled = !item.isNoteDisabled;
  }

  markElevesSansNote() {
    this.elevesSansNote = this.items
      .filter(item => !item.isNoteDisabled && item.note !== 0 && !this.isNumeric(item.note) || item.note > 20)
      .map(item => item.id);
  
    console.log(this.elevesSansNote);
    console.log(this.items);
  }

  deconnexion(){
    this.authservice.deleteToken()
    this.router.navigate(['/']);
  }
  
}