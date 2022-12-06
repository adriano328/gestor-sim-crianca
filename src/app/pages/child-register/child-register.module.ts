import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChildRegisterPageRoutingModule } from './child-register-routing.module';

import { ChildRegisterPage } from './child-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChildRegisterPageRoutingModule
  ],
  declarations: [ChildRegisterPage]
})
export class ChildRegisterPageModule {}
