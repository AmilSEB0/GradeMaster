import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfesseurService {

  url = `${environment.baseUrl}`

  constructor(
    private http: HttpClient
  ) { }

  public findMatiereofProfesseur(idProfesseur: number){
    return this.http.get(this.url+"/professeur/matiereId/"+idProfesseur)
  }
}
