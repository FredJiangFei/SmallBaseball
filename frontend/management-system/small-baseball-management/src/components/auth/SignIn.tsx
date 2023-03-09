import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';

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

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Must be a valid email')
    .max(255)
    .required('Email is required'),
  password: Yup.string().max(255).required('Password is required'),
});

function SignIn() {
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const { handleSubmit, handleBlur, values, handleChange, errors, touched } = useFormik({
    initialValues: {
      email: 'Admin@sbb.com',
      password: 'sbb123456',
      submit: false,
    },
    onSubmit: (values) => handleLogin(values),
  });

  const handleLogin = async (values: any) => {
    await signIn(values.email, values.password);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      {errors.submit && (
        <Alert mt={2} mb={3} severity="warning">
          {errors.submit}
        </Alert>
      )}
      <TextField
        type="email"
        name="email"
        label="Email Address"
        value={values.email}
        error={Boolean(touched.email && errors.email)}
        fullWidth
        helperText={touched.email && errors.email}
        onBlur={handleBlur}
        onChange={handleChange}
        my={2}
      />
      <TextField
        type="password"
        name="password"
        label="Password"
        value={values.password}
        error={Boolean(touched.password && errors.password)}
        fullWidth
        helperText={touched.password && errors.password}
        onBlur={handleBlur}
        onChange={handleChange}
        my={2}
      />

      <Button type='submit' fullWidth variant="contained" color="primary">
        Sign in
      </Button>
    </form>
  );
}

export default SignIn;
