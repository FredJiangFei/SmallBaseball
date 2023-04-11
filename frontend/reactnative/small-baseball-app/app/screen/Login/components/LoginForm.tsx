import React from 'react';
import * as Yup from 'yup';
import { Button } from 'native-base';
import { useFormik } from 'formik';
import { SbForm, SbFormControl } from '../../../components';

const validationSchema = Yup.object().shape({
  email: Yup.string().label('Email').required().email(),
  password: Yup.string().label('Password').required(),
});

const initValue = {
  email: 'fred@qq.com',
  password: 'aa123456',
};

export default function LoginForm({ onSubmit }) {
  const { handleSubmit, handleChange, isSubmitting, values, errors } = useFormik({
    initialValues: initValue,
    validationSchema: validationSchema,
    onSubmit: values => onSubmit(values),
  });

  return (
    <SbForm>
      <SbFormControl
        label="Email"
        onChangeText={handleChange('email')}
        defaultValue={values.email}
        isRequired
        helperText="We will never share your email."
        error={errors['email']}
      />
      <SbFormControl
        label="Password"
        onChangeText={handleChange('password')}
        defaultValue={values.password}
        isRequired
        helperText="We will never share your password."
        type="password"
        error={errors['password']}
      />
      <Button isDisabled={isSubmitting} onPress={(e: any) => handleSubmit(e)}>
        Sign In
      </Button>
    </SbForm>
  );
}
