import React, { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

import PrivateRoute from '../components/PrivateRoute';

const Error = lazy(() => import('../pages/Error'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Home = lazy(() => import('../pages/Home'));

export const Routes = (): React.ReactElement | null => {
  const elements = useRoutes([
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/',
      element: (
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      ),
    },
    {
      path: '*',
      element: <Error />,
    },
  ]);

  return elements;
};
