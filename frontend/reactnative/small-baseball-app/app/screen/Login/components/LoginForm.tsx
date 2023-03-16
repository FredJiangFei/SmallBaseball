import React from 'react';
import * as Yup from 'yup';
import { Button, Input } from 'native-base';
import { useFormik } from 'formik';
import { SbForm, SbInput } from '../../../components';

const validationSchema = Yup.object().shape({
  email: Yup.string().label('Email'),
  password: Yup.string().label('Password'),
});

const initValue = {
  email: '',
  password: '',
};

export default function LoginForm({ onSubmit }) {
  const { handleSubmit, handleChange, isSubmitting } = useFormik({
    initialValues: initValue,
    validationSchema: validationSchema,
    onSubmit: (values) => onSubmit(values),
  });

  return (
    <SbForm>
      <SbInput placeholder="Email" onChangeText={handleChange('email')} />
      <SbInput placeholder="Password" onChangeText={handleChange('password')} />
      <Button onPress={(e: any) => handleSubmit(e)} disabled={isSubmitting}>
        Sign In
      </Button>
    </SbForm>
  );
}
