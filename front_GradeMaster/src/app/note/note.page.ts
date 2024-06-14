import { Component, OnInit } from '@angular/core';
import { NoteService } from '../service/note.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {

  currentUtilisateur: any
  idMatiere: any
  notes:any
  decodedToken:any
  prenom= ""
  nom = ""
  tokken: any

  constructor(
    private noteService: NoteService,
    private authservice: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.decodedToken = this.authservice.getDecodedToken();

    if(this.decodedToken.role === 3){
      this.idMatiere = history.state.item;
      this.prenom = this.decodedToken.prenom;
      this.nom = this.decodedToken.nom;
      this.GetNoteEleve(this.decodedToken.id, this.idMatiere)
    }else{
      this.currentUtilisateur = history.state.item;
      this.prenom = this.currentUtilisateur.prenomUtilisateur;
      this.nom = this.currentUtilisateur.nomUtilisateur;
      this.GetNoteEleve(this.currentUtilisateur.idUtilisateur, this.currentUtilisateur.idMatiere)
    }  
  }

  GetNoteEleve(id: number, idMatiere: number){
    this.tokken = this.authservice.getToken()

    this.noteService.getNoteByEleveAndMatiere(id, idMatiere, this.tokken).subscribe(data => {
      this.notes = data
      console.log(this.notes)
    })
  }

  deconnexion(){
    this.authservice.deleteToken()
    this.router.navigate(['/']);
  }
}
