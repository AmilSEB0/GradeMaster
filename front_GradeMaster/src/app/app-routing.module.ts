import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'connexion',
    pathMatch: 'full'
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule),
    canActivate: [NoAuthGuard]
  },
  {
    path: 'moyenne',
    loadChildren: () => import('./moyenne/moyenne.module').then(m => m.MoyennePageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'note',
    loadChildren: () => import('./note/note.module').then( m => m.NotePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'moyenne-classe',
    loadChildren: () => import('./moyenne-classe/moyenne-classe.module').then( m => m.MoyenneClassePageModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
