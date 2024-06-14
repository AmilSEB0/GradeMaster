import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICreatenote } from '../interfaces/icreatenote';


@Injectable({
  providedIn: 'root'
})
export class NoteService {

  url = `${environment.baseUrl}`

  constructor(
    private http: HttpClient,
  ) { }

  public getMoyenneByEleve(eleveId: number, token: string){
    const tokent = token;

    const headers = {
      Authorization: `Bearer ${tokent}`,
    };
  
    const requestOptions = {
      headers: new HttpHeaders(headers),
    };
    return this.http.get(this.url+"/note/eleve/"+eleveId+"/moyennes", requestOptions);
  }
  
  public getNoteByEleveAndMatiere(eleveId: number, matiereId: number, token: string){
    const tokent = token;

    const headers = {
      Authorization: `Bearer ${tokent}`,
    };
  
    const requestOptions = {
      headers: new HttpHeaders(headers),
    };
    return this.http.get(this.url+"/note/eleve/"+eleveId+"/matiere/"+matiereId, requestOptions);
  }

  public getMoyenneClasseByProfesseur(professeurId: number, token: string){
  const tokent = token;

  const headers = {
    Authorization: `Bearer ${tokent}`,
  };

  const requestOptions = {
    headers: new HttpHeaders(headers),
  };
    
    return this.http.get(this.url+"/note/professeur/"+professeurId+"/moyenneClasse", requestOptions);
  }

  public calculerMoyenneClasseEleveByProfesseur(classeid: number, professeurId: number, token: string){
  const tokent = token;

  const headers = {
    Authorization: `Bearer ${tokent}`,
  };

  const requestOptions = {
    headers: new HttpHeaders(headers),
  };
    return this.http.get(this.url+"/note/moyenneEleve/classe/"+classeid+"/professeur/"+professeurId, requestOptions);
  }

  addNote(createNote: ICreatenote, professeurId: number, token: string) {
  const tokent = token;

  const headers = {
    Authorization: `Bearer ${tokent}`,
  };

  const requestOptions = {
    headers: new HttpHeaders(headers),
  };
    return this.http.post(this.url+"/note/"+professeurId, createNote, requestOptions);
  }

}
