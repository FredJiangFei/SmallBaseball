import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import userService from '../../services/userService';
import { useFormik } from 'formik';
import { setSession } from '../../utils/jwt';
import * as Yup from 'yup';
import SfLink from '../../components/SfLink';

const schema = Yup.object().shape({
  email: Yup.string().email('Must be a valid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

function SignIn() {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: (values: any) => handleLogin(values),
  });

  const handleLogin = async (values: any) => {
    const res: any = await userService.login(values);
    if (res && res.code === 200) {
      setSession(res.value?.token);
      await signIn();
      navigate('/');
    }
  };

  return (
    <>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(touched.email && errors.email)}
          helperText={touched.email && errors.email}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(touched.password && errors.password)}
          helperText={touched.password && errors.password}
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Sign In
        </Button>
        <Grid container>
          <Grid item display='flex' flex={1} justifyContent='center'>
            <SfLink to="/auth/sign-up"> Sign Up</SfLink>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default SignIn;
