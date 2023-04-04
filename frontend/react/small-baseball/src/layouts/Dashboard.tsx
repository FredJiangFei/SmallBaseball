import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

const Dashboard: React.FC = ({ children }: any) => {
  return (
    <>
      <Navbar />
      {children}
      <Outlet />
      <p>Dashboard Header</p>
    </>
  );
};

export default Dashboard;
