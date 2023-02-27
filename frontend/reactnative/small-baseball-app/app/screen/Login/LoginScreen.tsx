import { useNavigation } from '@react-navigation/native';
import { Heading, Text, View } from 'native-base';
import React from 'react';
import userService from '../../api/userService';
import { useAuth } from '../../hooks';
import routes from '../../navigator/routes';
import LoginForm from './components/LoginForm';

export default function LoginScreen({}) {
  const { login } = useAuth();
  const navigation: any = useNavigation();

  const handleLogin = async (command) => {
    await userService.login(command);
  };

  return (
    <View px={2}>
      <Heading>Sign In</Heading>
      <LoginForm onSubmit={handleLogin} />
      <Text onPress={() => navigation.navigate(routes.Register)}>Register</Text>
    </View>
  );
}
