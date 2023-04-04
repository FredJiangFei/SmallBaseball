import * as React from 'react';

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <>
      <a href="/">Home</a> | <a href="/products">Products</a>
    </>
  );
};

export default Navbar;
