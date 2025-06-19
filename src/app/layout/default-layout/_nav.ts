import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    title: true,
    name: 'Documents',
  },
  {
    name: 'Document',
    url: '/document',
    iconComponent: { name: 'cil-drop' },
  },
  {
    name: 'Template',
    url: '/template',
    iconComponent: { name: 'cil-drop' },
  },
  {
    name: 'Contacts',
    title: true,
  },

  {
    name: 'Contact',
    url: '/contact',
    iconComponent: { name: 'cil-calculator' },
  },
  // {
  //   title: true,
  //   name: 'Extras',
  // },
];
