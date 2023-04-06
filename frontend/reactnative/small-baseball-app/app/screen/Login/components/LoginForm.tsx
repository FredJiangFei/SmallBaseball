import React from 'react';
import * as Yup from 'yup';
import { Button } from 'native-base';
import { useFormik } from 'formik';
import { SbForm, SbInput } from '../../../components';

const validationSchema = Yup.object().shape({
  email: Yup.string().label('Email'),
  password: Yup.string().label('Password'),
});

const initValue = {
  email: 'fred@qq.com',
  password: 'aa123456',
};

export default function LoginForm({ onSubmit }) {
  const { handleSubmit, handleChange, isSubmitting, values } = useFormik({
    initialValues: initValue,
    validationSchema: validationSchema,
    onSubmit: (values) => onSubmit(values),
  });

  return (
    <SbForm>
      <SbInput placeholder="Email" onChangeText={handleChange('email')} defaultValue={values.email}/>
      <SbInput placeholder="Password" onChangeText={handleChange('password')} defaultValue={values.password}/>
      <Button
        isDisabled={isSubmitting}
        onPress={(e: any) => handleSubmit(e)}
        disabled={isSubmitting}
      >
        Sign In
      </Button>
    </SbForm>
  );
}
