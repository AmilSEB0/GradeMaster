import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EleveService } from '../service/eleve.service';
import { NavController } from '@ionic/angular';
import { ProfesseurService } from '../service/professeur.service';
import { ParentService } from '../service/parent.service';
import { AuthService } from '../service/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  utilisateurs: any = [];
  filtre: any = [];
  role: number = 3;
  errorMessage: string = '';

  @ViewChild('emailInput', { static: false }) emailInputElement: ElementRef | null = null;

  authForm = new FormGroup({
    email: new FormControl(),
    motDePasse: new FormControl(),
  });

  constructor(
    private authservice: AuthService,
    private readonly formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    const checkToken = this.authservice.getToken()
    console.log(checkToken)
    if (checkToken !== null) {
      this.router.navigate(['/moyenne']);
    }

    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+\.[a-zA-Z]+@grademaster\.fr$/)],],
      motDePasse: ['', Validators.required],
    });
  }

  login() {
     // Vérifiez si le champ email est invalide
     const emailFormControl = this.authForm.get('email');
     if (emailFormControl && emailFormControl.hasError('pattern')) {
       this.errorMessage = "L'adresse email n'est pas valide.";
       this.error(this.errorMessage)
       return;
     }

    this.authservice.login(this.authForm.value.email, this.authForm.value.motDePasse).subscribe(
      (response: any) => {
        console.log('Authentification réussie :', response);
        // Appel de la fonction pour sauvegarder le token
        this.authservice.saveToken(response.access_token);

        // Récupération des informations de l'utilisateur à partir du token
        const decodedToken = this.authservice.getDecodedToken();

        this.authForm.reset();

        this.router.navigate(['/moyenne']);



        // Affichage des informations de l'utilisateur
        console.log('Informations de l\'utilisateur :', decodedToken);
        console.log('id' + decodedToken.id);
      },
      (error) => {
        console.error('Erreur d\'authentification :', error);
        this.errorMessage = error.error.message;
        this.error(this.errorMessage)
      }
    );
  }

  error(text: string) {
    Swal.fire({
      icon: 'error',
      title: text,
      heightAuto: false,
    })
  }
}
