import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistredPage } from './registred.page';

const routes: Routes = [
  {
    path: '',
    component: RegistredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistredPageRoutingModule {}
