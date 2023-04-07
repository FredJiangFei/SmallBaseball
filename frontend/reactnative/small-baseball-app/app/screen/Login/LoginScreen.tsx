import { useNavigation } from '@react-navigation/native';
import { Heading, Text } from 'native-base';
import React from 'react';
import userService from '../../api/userService';
import { useAuth } from '../../hooks';
import routes from '../../navigator/routes';
import LoginForm from './components/LoginForm';
import { SbContainer } from '../../components';

export default function LoginScreen({}) {
  const { login } = useAuth();
  const navigation: any = useNavigation();

  const handleLogin = async (command) => {
    const res: any = await userService.login(command);
    login(res?.value?.token);
  };

  return (
    <SbContainer>
      <Heading>Sign In</Heading>
      <LoginForm onSubmit={handleLogin} />
      <Text
        mt={1}
        textAlign="center"
        variant="link"
        onPress={() => navigation.navigate(routes.Register)}
      >
        Register
      </Text>
    </SbContainer>
  );
}
