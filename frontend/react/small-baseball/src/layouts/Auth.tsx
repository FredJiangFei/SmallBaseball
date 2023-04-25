import { Box, Typography, Link } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';

const Auth: React.FC = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box flex={1}
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Outlet />
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Small Ballbase
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Auth;
