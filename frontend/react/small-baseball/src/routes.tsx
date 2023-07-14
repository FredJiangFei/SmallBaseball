import DashboardLayout from './layouts/Dashboard';
import AuthLayout from './layouts/Auth';

import Home from './pages/Home';
import Page404 from './pages/auth/Page404';

import SignIn from './pages/auth/SignIn';
import AuthGuard from './components/guards/AuthGuard';
import SignUp from './pages/auth/SignUp';
import ResetPassword from './pages/ResetPassword';
import Profile from './pages/Profile';
import Todo from './pages/Todo';
import Chat from './pages/Chat';
import User from './pages/User';

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
        element: <Home />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'todos',
        element: <Todo />,
      },
      {
        path: 'user',
        element: <User />,
      },
      {
        path: 'chat/:id',
        element: <Chat />,
      },
      {
        path: 'reset-password',
        element: <ResetPassword />,
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
    ],
  },
  {
    path: '*',
    element: <Page404 />,
  },
];

export default routes;
