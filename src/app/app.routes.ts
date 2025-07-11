import { Routes } from '@angular/router';
import { authGuard } from '../services/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./views/pages/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./views/pages/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./layout').then((m) => m.DefaultLayoutComponent),
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./views/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
      },
      {
        path: 'document',
        loadChildren: () =>
          import('./views/document-layout/routes').then(
            (r) => r.DocumentRoutes
          ),
        canActivate: [authGuard],
      },

      {
        path: 'template',
        loadChildren: () =>
          import('./views/template-layout/routes').then(
            (r) => r.TemplateRoutes
          ),
        canActivate: [authGuard],
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./views/create-contact/create-contact.component').then(
            (c) => c.CreateContactComponent
          ),
      },
    ],
  },

  {
    path: 'plans',
    loadComponent: () =>
      import('./views/pages/plans-pricing/plans-pricing.component').then(
        (c) => c.PlansPricingComponent
      ),
  },

  {
    path: '**',
    loadComponent: () =>
      import('./views/pages/page404/page404.component').then(
        (c) => c.Page404Component
      ),
    canActivate: [authGuard],
  },
];
