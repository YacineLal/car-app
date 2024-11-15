import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'signup',
    loadComponent: () => import('./signup/signup.page').then(m => m.SignupPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'car-list',
    loadComponent: () => import('./car-list/car-list.page').then(m => m.CarListPage)
  },
  {
    path: 'car-create',
    loadComponent: () => import('./car-create/car-create.page').then(m => m.CarCreatePage)
  },
  {
    path: 'car-detail',
    loadComponent: () => import('./car-detail/car-detail.page').then(m => m.CarDetailPage)
  },
];
