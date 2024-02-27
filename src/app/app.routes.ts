import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/profile/profile.module').then((m) => m.ProfileModule)
  },
  {
    path: '404',
    loadChildren: () =>
      import('./modules/page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule)
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '404' }
];
