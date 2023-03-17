import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, Input } from 'native-base';
import { SbForm } from '../../../components';

const validationSchema = Yup.object().shape({
  email: Yup.string().label('Email'),
  password: Yup.string().label('Password'),
});

const initValue = {
  email: '',
  password: '',
};

export default function RegisterForm({ onSubmit }) {
  return (
    <Formik
      initialValues={initValue}
      validationSchema={validationSchema}
      onSubmit={(values) => onSubmit(values)}
    >
      {({ handleChange, handleSubmit, isSubmitting }) => (
        <SbForm>
          <Input placeholder="Email" onChangeText={handleChange('email')} />
          <Input
            placeholder="Password"
            onChangeText={handleChange('password')}
          />
          <Button onPress={(e: any) => handleSubmit(e)} disabled={isSubmitting}>
            Sign Up
          </Button>
        </SbForm>
      )}
    </Formik>
  );
}
