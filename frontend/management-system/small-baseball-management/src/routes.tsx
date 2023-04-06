import React from 'react';
import DashboardLayout from './layouts/Dashboard';
import AuthLayout from './layouts/Auth';

import Default from './pages/dashboards';
import Page404 from './pages/auth/Page404';

import SignIn from './pages/auth/SignIn';
import AuthGuard from './components/guards/AuthGuard';
import Profile from './pages/settings/Profile';
import Managers from './pages/dashboards/Managers';
import CreateManager from './pages/dashboards/CreateManager';

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
        path: 'managers',
        element: <Managers />,
      },
      {
        path: 'managers/create',
        element: <CreateManager />,
      },
      {
        path: 'profile',
        element: <Profile />,
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
      {
        path: '404',
        element: <Page404 />,
      },
    ],
  },
  {
    path: '*',
    element: <AuthLayout />,
    children: [
      {
        path: '*',
        element: <Page404 />,
      },
    ],
  },
];

export default routes;
