import DashboardLayout from './layouts/Dashboard';
import AuthLayout from './layouts/Auth';

import Default from './pages/dashboards';
import Page404 from './pages/auth/Page404';

import SignIn from './pages/auth/SignIn';
import AuthGuard from './components/guards/AuthGuard';
import Team from './pages/dashboards/Team';

const routes = [
  {
    path: '/',
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: '',
        element: <Default />,
      },
      {
        path: 'teams',
        element: <Team />,
      },
    ],
  },
  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'sign-in',
        element: <SignIn />,
      },
    ],
  },
  {
    path: '*',
    element: <Page404 />,
  },
];

export default routes;
