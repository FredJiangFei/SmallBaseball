import React from 'react';
import { Link, LinkProps } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

type Props = {
  to: string;
};

const SfLink: React.FC<LinkProps & Props> = ({ to, children, ...rest }) => {
  return (
    <Link to={to} component={RouterLink} underline="none" {...rest}>
      {children}
    </Link>
  );
};

export default SfLink;
