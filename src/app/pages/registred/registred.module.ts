import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistredPageRoutingModule } from './registred-routing.module';

import { RegistredPage } from './registred.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistredPageRoutingModule,
    ReactiveFormsModule 
  ],
  declarations: [RegistredPage]
})
export class RegistredPageModule {}
