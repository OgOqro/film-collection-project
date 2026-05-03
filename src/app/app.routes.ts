import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./components/home-page/home-page').then((m) => m.HomePage),
  },
  { path: 'about', loadComponent: () => import('./components/about/about').then((m) => m.About) },
  {
    path: 'movies/:id',
    loadComponent: () =>
      import('./components/film-details/film-details').then((m) => m.FilmDetails),
  },
  { path: '**', redirectTo: 'home' },
];
