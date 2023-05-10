import { Box, Button, TextField, Container } from '@mui/material';
import { useFormik } from 'formik';
import userService from '../services/userService';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  oldPassword: Yup.string().required('Old Password is required'),
  password: Yup.string().required('Password is required'),
  passwordConfirmation: Yup.string()
    .required('Password Confirmation is required')
    .oneOf([Yup.ref('password')], 'The two passwords you entered did not match'),
});

function ResetPassword() {
  const { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
    initialValues: {
      oldPassword: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: schema,
    onSubmit: (values: any) => handleResetpassword(values),
  });

  const handleResetpassword = async (values: any) => {
    await userService.resetPassword(values);
  };

  return (
    <Container component="main" maxWidth="xs">
      <h1>Reset Password</h1>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          name="oldPassword"
          label="Old Password"
          type="password"
          value={values.oldPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(touched.oldPassword && errors.oldPassword)}
          helperText={touched.oldPassword && errors.oldPassword}
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
        <TextField
          margin="normal"
          required
          fullWidth
          name="passwordConfirmation"
          label="Password Confirmation"
          type="password"
          value={values.passwordConfirmation}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(touched.passwordConfirmation && errors.passwordConfirmation)}
          helperText={touched.passwordConfirmation && errors.passwordConfirmation}
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Save
        </Button>
      </Box>
    </Container>
  );
}

export default ResetPassword;
