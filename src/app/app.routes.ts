import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./modules/home/pages/home').then(m => m.HomePage) },
    { path: '**', redirectTo: '' }
];
