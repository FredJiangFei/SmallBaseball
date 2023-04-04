import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

const Dashboard: React.FC = ({ children }: any) => {
  return (
    <>
      <Navbar />
      {children}
      <Outlet />
      <p>Dashboard Footer</p>
    </>
  );
};

export default Dashboard;
