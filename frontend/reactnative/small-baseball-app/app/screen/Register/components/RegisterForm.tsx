import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from 'native-base';
import { SbForm, SbInput } from '../../../components';

const validationSchema = Yup.object().shape({
  email: Yup.string().label('Email'),
  password: Yup.string().label('Password'),
});

const initValue = {
  firstName: 'Fred',
  lastName: 'Jiang',
  email: 'fred@qq.com',
  password: 'aa123456',
};

export default function RegisterForm({ onSubmit }) {
  const { handleSubmit, handleChange, isSubmitting, values } = useFormik({
    initialValues: initValue,
    validationSchema: validationSchema,
    onSubmit: (values) => onSubmit(values),
  });

  return (
    <SbForm>
      <SbInput placeholder="First Name" onChangeText={handleChange('firstName')} defaultValue={values.firstName}/>
      <SbInput placeholder="Last Name" onChangeText={handleChange('lastName')} defaultValue={values.lastName} />
      <SbInput placeholder="Email" onChangeText={handleChange('email')} defaultValue={values.email} />
      <SbInput placeholder="Password" onChangeText={handleChange('password')} defaultValue={values.password} />
      <Button onPress={(e: any) => handleSubmit(e)} disabled={isSubmitting}>
        Sign Up
      </Button>
    </SbForm>
  );
}
