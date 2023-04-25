import DashboardLayout from './layouts/Dashboard';
import AuthLayout from './layouts/Auth';

import Default from './pages/dashboards';
import Page404 from './pages/auth/Page404';

import SignIn from './pages/auth/SignIn';
import AuthGuard from './components/guards/AuthGuard';
import Todo from './pages/dashboards/Todo';
import SignUp from './pages/auth/SignUp';
import ForgotPassword from './pages/auth/ForgotPassword';

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
        path: 'todos',
        element: <Todo />,
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
        path: 'sign-up',
        element: <SignUp />,
      },
      {
        path: 'forget-password',
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: '*',
    element: <Page404 />,
  },
];

export default routes;
