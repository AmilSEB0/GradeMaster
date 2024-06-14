import { Component, OnInit } from '@angular/core';
import { NoteService } from '../service/note.service';
import { NavController } from '@ionic/angular';
import { EleveService } from '../service/eleve.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-moyenne',
  templateUrl: './moyenne.page.html',
  styleUrls: ['./moyenne.page.scss'],
})
export class MoyennePage implements OnInit {

  moyennes:any
  MoyenneGeneralEleve:number | undefined
  NomMatiere = ""
  enfants: any
  selectedOption: any
  voirMoyenne: boolean = false
  decodedToken: any
  tokken: any

  constructor(
    private noteservice: NoteService,
    private eleveservice: EleveService,
    private nav: NavController,
    private authservice: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.decodedToken = this.authservice.getDecodedToken();
    console.log("decodedToken", this.decodedToken)
    console.log("roel", this.decodedToken.role)
    if(this.decodedToken.role === 3){
      this.GetMoyenneByEleve()
    }else if(this.decodedToken.role ===1){
      this.GetMoyenneClasseByProfesseur()
    }else if(this.decodedToken.role ===2){
      this.getElevesByParentId()
    }

  }
  
  GetMoyenneByEleve(){
    this.tokken = this.authservice.getToken()

    this.noteservice.getMoyenneByEleve(this.decodedToken.id, this.tokken).subscribe(data => {
      console.log("Moyennes Par Matière:", data);
      console.log("Moyenne Générale:", data);
  
      this.moyennes =data;
      this.MoyenneGeneralEleve = this.moyennes?.moyenneGenerale
  
      console.log("Complete data object:", this.moyennes);
    },
    (error) =>{
      this.error(error.error.message)
    });
    
  }

  GetMoyenneClasseByProfesseur(){
    this.tokken = this.authservice.getToken()
    console.log(this.tokken)
    this.noteservice.getMoyenneClasseByProfesseur(this.decodedToken.id, this.tokken ).subscribe(data => {
      this.moyennes = data;
      console.log("Moyenne Générale:", data);
      console.log("Moyenne GeneralEleve:", this.moyennes[this.moyennes.length - 1]);
      this.NomMatiere = this.moyennes[this.moyennes.length - 1].nomMatiere
    },
    (error) =>{
      console.log('kdlkdldkdl')
      this.error(error.error.message)
    });
  }
  
  getElevesByParentId(){
    this.eleveservice.getElevesByParentId(this.decodedToken.id).subscribe(data => {
      this.enfants = data
      console.log(this.enfants)
    },
    (error) =>{
      this.error(error.error.message)
    });
  }


  error(text: string) {
    Swal.fire({
      icon: 'error',
      title: text,
      heightAuto: false,
    })
  }
  VoirNote(id: number) {
    this.nav.navigateForward('/note', { state: { item: id } });
  }

  VoirMoyenneEnfant(idMatiere: number) {
    const selected = {
      idUtilisateur: this.selectedOption.id,
      nomUtilisateur : this.selectedOption.nom,
      prenomUtilisateur: this.selectedOption.prenom,
      idMatiere: idMatiere,
      role: 2
    };    
   
    console.log(selected)
    this.nav.navigateForward('/note', { state: { item: selected } });

  }

  VoirMoyenneEleveClasse(idclasse: number, nomclasse: string) {
    console.log(idclasse)
    const classe = {
      idclasse: idclasse,
      nomclasse: nomclasse
    }  
    this.nav.navigateForward('/moyenne-classe', { state: { item: classe } });
  }

  VoirMoyenneDeSonEnfant(){
    this.tokken = this.authservice.getToken()

   this.noteservice.getMoyenneByEleve(this.selectedOption.id, this.tokken).subscribe(data => {
      console.log("Moyennes Par Matière:", data);
      console.log("Moyenne Générale:", data);
      this.voirMoyenne = true;
  
      this.moyennes =data;
      this.MoyenneGeneralEleve = this.moyennes?.moyenneGenerale
  
      console.log("Complete data object:", this.moyennes);
    });
  }

  deconnexion(){
    this.authservice.deleteToken()
    this.router.navigate(['/']);
  }
}
