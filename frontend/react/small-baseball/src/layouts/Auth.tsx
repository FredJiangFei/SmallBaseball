import React from 'react';
import { Outlet } from 'react-router-dom';
const Auth: React.FC = ({ children }: any) => {
  return (
    <>
      <p>Auth Header</p>
      {children}
      <Outlet />
      <p>Auth Footer</p>
    </>
  );
};

export default Auth;
