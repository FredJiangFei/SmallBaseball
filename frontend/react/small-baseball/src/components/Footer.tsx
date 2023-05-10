import { Typography, Toolbar, AppBar } from '@mui/material';
import * as React from 'react';

const Footer: React.FC = () => {
  return (
    <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Typography color="white">Copyright © Shinetech {new Date().getFullYear()}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
