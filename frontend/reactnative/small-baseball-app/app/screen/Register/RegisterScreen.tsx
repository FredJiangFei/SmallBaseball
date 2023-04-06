import { Heading, View } from 'native-base';
import React from 'react';
import userService from '../../api/userService';
import { useAuth } from '../../hooks';
import RegisterForm from './components/RegisterForm';

export default function LoginScreen() {
  const { login } = useAuth();

  const handleRegister = async (command) => {
    const res = await userService.register(command);
    console.log(res);
  };

  return (
    <View px={2}>
      <Heading>Sign Up</Heading>
      <RegisterForm onSubmit={handleRegister} />
    </View>
  );
}
