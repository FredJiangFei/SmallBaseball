import * as React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';

interface AuthGuardType {
  children: React.ReactNode;
}

function AuthGuard({ children }: AuthGuardType) {
  const { isAuthenticated, isInitialized } = useAuth();

  if (isInitialized && !isAuthenticated) {
    return <Navigate to="/auth/sign-in" />;
  }

  return <>{children}</>;
}

export default AuthGuard;
