import { SidebarItemsType } from '../../types/sidebar';
import { Layout, Sliders } from 'react-feather';

const pagesSection = [
  {
    icon: Sliders,
    title: 'Dashboard',
    children: [
      {
        href: '/',
        title: 'Default',
      },
      {
        href: '/managers',
        title: 'Managers',
      },
    ],
  },
  {
    href: '/pages',
    icon: Layout,
    title: 'Pages',
    children: [
      {
        href: '/profile',
        title: 'Profile',
      },
    ],
  }
] as SidebarItemsType[];

const navItems = [
  {
    title: 'Pages',
    pages: pagesSection,
  }
];

export default navItems;
