import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./features/planner/planner.routes').then(r => r.PLANNER_ROUTES) },
];
