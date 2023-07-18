import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { CssBaseline, Box } from '@mui/material';
import Footer from '../components/Footer';
import { SignalRProvider } from '../contexts/SignalRContext';
import useSignalR from '../hooks/useSignalR';

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <SignalRProvider>
        <CssBaseline />
        <Navbar />
        <Box sx={{ flex: 1 }}>
          <Outlet />
        </Box>
      </SignalRProvider>
      <Footer />
    </Box>
  );
};

export default Dashboard;
