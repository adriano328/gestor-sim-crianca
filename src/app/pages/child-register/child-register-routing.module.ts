import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildRegisterPage } from './child-register.page';

const routes: Routes = [
  {
    path: '',
    component: ChildRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildRegisterPageRoutingModule {}
