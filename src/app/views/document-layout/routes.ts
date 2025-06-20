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
        path: '',
        loadComponent: () =>
          import('./document-dashboard/document-dashboard.component').then(
            (c) => c.DocumentDashboardComponent
          ),
      },
      {
        path: 'add-document',
        loadComponent: () =>
          import('./add-document/add-document.component').then(
            (c) => c.AddDocumentComponent
          ),
      },
      {
        path: 'add-recipient',
        loadComponent: () =>
          import('./add-recipient/add-recipient.component').then(
            (c) => c.AddRecipientComponent
          ),
      },
    ],
  },
];
