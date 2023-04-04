import * as React from 'react';
import { NavLink } from 'react-router-dom';

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink> | <NavLink to="/teams">Teams</NavLink>
    </>
  );
};

export default Navbar;
