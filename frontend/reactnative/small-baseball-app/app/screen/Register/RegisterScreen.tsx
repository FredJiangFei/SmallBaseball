import { Heading, View } from 'native-base';
import React from 'react';
import userService from '../../api/userService';
import { useAuth } from '../../hooks';
import RegisterForm from './components/RegisterForm';

export default function LoginScreen() {
  const { login } = useAuth();

  const handleRegister = async (command) => {
    await userService.register(command);
  };

  return (
    <View px={2}>
      <Heading>Sign Up</Heading>
      <RegisterForm onSubmit={handleRegister} />
    </View>
  );
}
