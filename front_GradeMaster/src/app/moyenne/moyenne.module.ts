import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoyennePageRoutingModule } from './moyenne-routing.module';

import { MoyennePage } from './moyenne.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoyennePageRoutingModule
  ],
  declarations: [MoyennePage]
})
export class MoyennePageModule {}
