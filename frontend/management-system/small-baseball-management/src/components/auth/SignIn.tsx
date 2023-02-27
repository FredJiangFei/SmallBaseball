import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import {
  Alert as MuiAlert,
  Checkbox,
  FormControlLabel,
  Button,
  TextField as MuiTextField,
} from '@mui/material';
import { spacing } from '@mui/system';

import useAuth from '../../hooks/useAuth';

const Alert = styled(MuiAlert)(spacing);
const TextField = styled(MuiTextField)<{ my?: number }>(spacing);

function SignIn() {
  const navigate = useNavigate();
  const { signIn } = useAuth();

  return <h1>SignIn</h1>;
}

export default SignIn;
