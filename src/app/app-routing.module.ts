import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   // loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  //   loadChildren: () => import('./first-page/first-page.module').then( m => m.FirstPagePageModule)
  // },
  // {
  //   path: 'detail',
  //   loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  // },
  // {
  //   path: 'films',
  //   loadChildren: () => import('./films/films.module').then( m => m.FilmsPageModule)
  // },
  // {
  //   path: 'detail-film',
  //   loadChildren: () => import('./detail-film/detail-film.module').then( m => m.DetailFilmPageModule)
  // },
  {
    path: 'first-page',
    loadChildren: () => import('./first-page/first-page.module').then( m => m.FirstPagePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
