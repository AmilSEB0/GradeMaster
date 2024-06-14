import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoyenneClassePageRoutingModule } from './moyenne-classe-routing.module';

import { MoyenneClassePage } from './moyenne-classe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoyenneClassePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [MoyenneClassePage]
})
export class MoyenneClassePageModule {}
