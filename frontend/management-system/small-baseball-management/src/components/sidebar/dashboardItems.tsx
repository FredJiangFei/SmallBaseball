import { SidebarItemsType } from '../../types/sidebar';
import { Grid, Layout, Sliders } from 'react-feather';

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
        href: '/products',
        title: 'Products',
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

const elementsSection = [
  {
    href: '/components',
    icon: Grid,
    title: 'Components',
    children: [
      {
        href: '/components/alerts',
        title: 'Alerts',
      },
    ],
  }
] as SidebarItemsType[];

const navItems = [
  {
    title: 'Pages',
    pages: pagesSection,
  },
  {
    title: 'Elements',
    pages: elementsSection,
  },
];

export default navItems;
