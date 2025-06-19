import { Routes } from '@angular/router';

export const DocumentRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./document-layout.component').then(
        (c) => c.DocumentLayoutComponent
      ),
    children: [
      {
        path: '',
        redirectTo: 'document',
        pathMatch: 'full',
      },
      {
        path: 'document',
        loadComponent: () =>
          import('./document-dashboard/document-dashboard.component').then(
            (c) => c.DocumentDashboardComponent
          ),
      },
    ],
  },
];
