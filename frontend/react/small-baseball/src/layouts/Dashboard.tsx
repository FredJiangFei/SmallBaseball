import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { CssBaseline, Box } from '@mui/material';
import Footer from '../components/Footer';
import { SignalRProvider } from '../contexts/SignalRContext';

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <CssBaseline />
      <Navbar />
      <Box sx={{ flex: 1 }}>
        <SignalRProvider>
          <Outlet />
        </SignalRProvider>
      </Box>
      <Footer />
    </Box>
  );
};

export default Dashboard;
