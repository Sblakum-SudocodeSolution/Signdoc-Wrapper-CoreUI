import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-home' },
  },
  {
    title: true,
    name: 'Documents',
  },
  {
    name: 'Document',
    url: '/document',
    iconComponent: { name: 'cil-description' },
  },
  {
    name: 'Template',
    url: '/template',
    iconComponent: { name: 'cil-note-add' },
  },
  {
    name: 'Contacts',
    title: true,
  },

  {
    name: 'Contact',
    url: '/contact',
    iconComponent: { name: 'cil-user' },
  },

  {
    name: 'Team',
    url: '/team',
    iconComponent: { name: 'cil-people' },
  },

  {
    name: 'API',
    url: '/api',
    iconComponent: { name: 'cil-code' },
  },

  {
    name: 'Admin',
    url: '/admin',
    iconComponent: { name: 'cil-user' },
  },

  {
    name: 'Support',
    url: '/support',
    iconComponent: { name: 'cil-user' },
  },

  {
    name: 'Setting',
    url: '/setting',
    iconComponent: { name: 'cil-settings' },
  },

  {
    name: 'Reports',
    url: '/reports',
    iconComponent: { name: 'cil-user' },
  },

  {
    name: 'Plan & Pricing',
    url: '/plans',
    iconComponent: { name: 'cil-dollar' },
  },
  // {
  //   title: true,
  //   name: 'Extras',
  // },
];
