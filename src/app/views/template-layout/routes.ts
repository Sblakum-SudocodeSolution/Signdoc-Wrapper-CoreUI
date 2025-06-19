import { Routes } from '@angular/router';

export const TemplateRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./template-layout.component').then(
        (c) => c.TemplateLayoutComponent
      ),
    children: [
      {
        path: '',
        redirectTo: 'template',
        pathMatch: 'full',
      },
      {
        path: 'template',
        loadComponent: () =>
          import('./template-dashboard/template-dashboard.component').then(
            (c) => c.TemplateDashboardComponent
          ),
      },
    ],
  },
];
