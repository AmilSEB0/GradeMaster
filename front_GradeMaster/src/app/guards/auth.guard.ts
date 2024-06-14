import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.getToken()) {
      // Utilisateur connecté, autoriser l'accès à la page
      return true;
    } else {
      // Utilisateur non connecté, rediriger vers la page de connexion
      this.router.navigate(['/']);
      return false;
    }
  }
}
