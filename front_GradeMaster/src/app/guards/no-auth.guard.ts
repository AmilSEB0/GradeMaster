import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.getToken()) {
      // Utilisateur connecté, rediriger vers la page 'moyenne'
      this.router.navigate(['/moyenne']);
      return false;
    } else {
      // Utilisateur non connecté, autoriser l'accès à la page
      return true;
    }
  }
}
