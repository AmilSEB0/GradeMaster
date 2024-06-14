import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = `${environment.baseUrl}`;

  constructor(private http: HttpClient) { }

  login(email: string, motDePasse: string) {
    const userData = { email, motDePasse };
    return this.http.post(`${this.url}/auth/login`, userData);
  }

  // Fonction pour sauvegarder le token et le rôle dans le stockage local
  saveToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  // Fonction pour récupérer le token depuis le stockage local
  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  // Fonction pour décoder le token et récupérer les données de l'utilisateur
  getDecodedToken(): any {
    const token = this.getToken();
    if (token) {
      return jwt_decode(token);
    }
    return null;
  }

  // Méthode pour récupérer les informations de l'utilisateur
  getUserInfo(): any {
    const decodedToken = this.getDecodedToken();
    return decodedToken ? decodedToken : null;
  }

  deleteToken(){
    return localStorage.removeItem('access_token')
  }
}
