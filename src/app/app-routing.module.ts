import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registred',
    loadChildren: () => import('./pages/registred/registred.module').then( m => m.RegistredPageModule)
  },
  {
    path: 'galery',
    loadChildren: () => import('./pages/galery/galery.module').then( m => m.GaleryPageModule)
  },
  {
    path: 'child-register',
    loadChildren: () => import('./pages/child-register/child-register.module').then( m => m.ChildRegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
