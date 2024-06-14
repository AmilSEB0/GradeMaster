import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EleveService {

  url = `${environment.baseUrl}`
  
  constructor(
    private http: HttpClient,
  ) { }

  public getElevesByParentId(parentId: number){
    return this.http.get(this.url + '/eleve/parent/' + parentId)
  }
}
