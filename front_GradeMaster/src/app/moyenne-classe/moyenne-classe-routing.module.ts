import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoyenneClassePage } from './moyenne-classe.page';

const routes: Routes = [
  {
    path: '',
    component: MoyenneClassePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoyenneClassePageRoutingModule {}
