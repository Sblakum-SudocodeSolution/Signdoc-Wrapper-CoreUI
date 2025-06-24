// import { INavData } from '@coreui/angular';

// export const navItems: INavData[] = [
//   {
//     name: 'Dashboard',
//     url: '/dashboard',
//     iconComponent: { name: 'cil-home' },
//   },
//   {
//     title: true,
//     name: 'Documents',
//   },
//   {
//     name: 'Document',
//     url: '/document',
//     iconComponent: { name: 'cil-description' },
//   },
//   {
//     name: 'Template',
//     url: '/template',
//     iconComponent: { name: 'cil-note-add' },
//   },
//   {
//     name: 'Contacts',
//     title: true,
//   },

//   {
//     name: 'Contact',
//     url: '/contact',
//     iconComponent: { name: 'cil-user' },
//   },

//   {
//     name: 'Team',
//     url: '/team',
//     iconComponent: { name: 'cil-people' },
//   },

//   {
//     name: 'API',
//     url: '/api',
//     iconComponent: { name: 'cil-code' },
//   },

//   {
//     name: 'Admin',
//     url: '/admin',
//     iconComponent: { name: 'cil-user' },
//   },

//   {
//     name: 'Support',
//     url: '/support',
//     iconComponent: { name: 'cil-user' },
//   },

//   {
//     name: 'Setting',
//     url: '/setting',
//     iconComponent: { name: 'cil-settings' },
//   },

//   {
//     name: 'Reports',
//     url: '/reports',
//     iconComponent: { name: 'cil-user' },
//   },

//   {
//     name: 'Plan & Pricing',
//     url: '/plans',
//     iconComponent: { name: 'cil-dollar' },
//   },
//   // {
//   //   title: true,
//   //   name: 'Extras',
//   // },
// ];

export const navItems: {
  label: string;
  link: string;
  routerLinkActive: string;
  icon: string;
  title?: string;
  hr?: boolean;
}[] = [
  {
    label: 'Dashboard',
    link: 'dashboard',
    routerLinkActive: 'activated-route',
    icon: 'bi bi-house-door',
  },
  {
    title: 'Dashboard',
    label: 'Documents',
    link: 'document',
    routerLinkActive: 'activated-route',
    icon: 'bi bi-file-earmark-text',
  },
  {
    label: 'Template',
    link: 'template',
    routerLinkActive: 'activated-route',
    icon: 'bi bi-clipboard2-plus',
  },

  {
    title: 'Contacts',
    label: 'Contacts',
    link: 'contact',
    routerLinkActive: 'activated-route',
    icon: 'bi bi-person',
  },
  {
    label: 'Team',
    link: 'team',
    routerLinkActive: 'activated-route',
    icon: 'bi bi-people',
  },
  {
    label: 'API',
    link: 'api',
    routerLinkActive: 'activated-route',
    icon: 'bi bi-code',
  },
  {
    label: 'Admin',
    link: 'admin',
    routerLinkActive: 'activated-route',
    icon: 'bi bi-person-workspace',
  },
  {
    label: 'Support',
    link: 'support',
    routerLinkActive: 'activated-route',
    icon: 'bi bi-file-person',
  },
  {
    label: 'Setting',
    link: 'setting',
    routerLinkActive: 'activated-route',
    icon: 'bi bi-gear',
  },
  {
    hr: true,
    label: 'Reports',
    link: 'reports',
    routerLinkActive: 'activated-route',
    icon: 'bi bi-file-bar-graph',
  },
  {
    label: 'Plans & Pricing',
    link: 'plans',
    routerLinkActive: 'activated-route',
    icon: 'bi bi-currency-rupee',
  },
];
