import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoyennePage } from './moyenne.page';

const routes: Routes = [
  {
    path: '',
    component: MoyennePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoyennePageRoutingModule {}
