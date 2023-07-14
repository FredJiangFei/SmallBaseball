import * as React from 'react';
import useAuth from '../hooks/useAuth';
import { AppBar, Avatar, Box, Button, Toolbar, Typography } from '@mui/material';
import SfLink from './SfLink';
import useTheme from '../hooks/useTheme';
import { THEMES } from '../constants';

const Navbar: React.FC = () => {
  const { signOut } = useAuth();
  const { theme, setTheme } = useTheme();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box sx={{ display: 'flex', flex: 1 }}>
          <Typography variant="h6" component="div" mr={1}>
            <SfLink to="/" color="white">
              Home |
            </SfLink>
          </Typography>
          <Typography variant="h6" component="div" mr={1}>
            <SfLink to="/todos" color="white">
              Todos |
            </SfLink>
          </Typography>
          <Typography variant="h6" component="div" mr={1}>
            <SfLink to="/user" color="white">
              User |
            </SfLink>
          </Typography>
        </Box>

        <SfLink to="profile">
          <Avatar>S</Avatar>
        </SfLink>
        <Button onClick={signOut} color="inherit">
          Logout
        </Button>
        <Button
          onClick={() => setTheme(theme === THEMES.DEFAULT ? THEMES.DARK : THEMES.DEFAULT)}
          color="inherit">
          {theme === THEMES.DEFAULT ? '🌞' : '🌙'}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
