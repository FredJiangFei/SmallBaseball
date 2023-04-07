import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Checkbox, Radio, Row } from 'native-base';
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
  sex: 'male',
};

export default function RegisterForm({ onSubmit }) {
  const [isAgree, setIsAgree] = useState(false);

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
      <SbInput placeholder="Password" onChangeText={handleChange('password')} defaultValue={values.password} secureTextEntry/>
      
      <Radio.Group name='sex' onChange={handleChange('sex')} defaultValue={values.sex}>
        <Row space={4} alignItems='center'>
          <Radio value="male" size="sm">
            Male
          </Radio>
          <Radio value="female" size="md">
            Female
          </Radio>
        </Row>
      </Radio.Group>

      <Checkbox value="agree" defaultIsChecked={isAgree} onChange={values=>setIsAgree(values)}>
        I agree to the terms and conditions
      </Checkbox>

      <Button onPress={(e: any) => handleSubmit(e)} isDisabled={isSubmitting || !isAgree}>
        Sign Up
      </Button>
    </SbForm>
  );
}
