import * as React from 'react';
import styled, { withTheme } from 'styled-components/macro';
import {
  Grid,
  AppBar,
  Toolbar,
  IconButton as MuiIconButton,
} from '@mui/material';
import useAuth from '../../hooks/useAuth';
import { Menu as MenuIcon } from '@mui/icons-material';

const IconButton = styled(MuiIconButton)`
  svg {
    width: 22px;
    height: 22px;
  }
`;

type NavbarProps = {
  theme: {};
  onDrawerToggle: React.MouseEventHandler<HTMLElement>;
};

const Navbar: React.FC<NavbarProps> = ({ onDrawerToggle }) => {
  const { user } = useAuth();

  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item sx={{ display: { xs: 'block', md: 'none' } }}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={onDrawerToggle}
                size="large"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs />
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default withTheme(Navbar);
