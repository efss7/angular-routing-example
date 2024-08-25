import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'module1', loadChildren: () => import('./module1/module1.module').then(m => m.Module1Module) },
  { path: 'module2', loadChildren: () => import('./module2/module2.module').then(m => m.Module2Module) },
  { path: '', redirectTo: '/module1/child1', pathMatch: 'full' }
];
