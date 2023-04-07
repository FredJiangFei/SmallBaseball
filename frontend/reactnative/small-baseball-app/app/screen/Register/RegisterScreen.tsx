import { Heading, View } from 'native-base';
import React from 'react';
import userService from '../../api/userService';
import { useAuth } from '../../hooks';
import RegisterForm from './components/RegisterForm';
import { SbContainer } from '../../components';

export default function LoginScreen() {
  const { login } = useAuth();

  const handleRegister = async (command) => {
    const res = await userService.register(command);
    console.log(res);
  };

  return (
    <SbContainer>
      <Heading>Sign Up</Heading>
      <RegisterForm onSubmit={handleRegister} />
    </SbContainer>
  );
}
