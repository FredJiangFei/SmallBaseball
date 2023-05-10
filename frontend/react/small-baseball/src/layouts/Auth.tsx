import { Box, CssBaseline } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';

const Auth: React.FC = () => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        flex={1}
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Outlet />
      </Box>
    </Container>
  );
};

export default Auth;
