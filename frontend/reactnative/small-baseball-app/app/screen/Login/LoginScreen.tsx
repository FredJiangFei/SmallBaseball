import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { Heading, Text } from 'native-base';
import React from 'react';
import userService from '../../api/userService';
import { useAuth } from '../../hooks';
import routes from '../../navigator/routes';
import LoginForm from './components/LoginForm';
import { SbContainer } from '../../components';
import { Alert, Linking } from 'react-native';

export default function LoginScreen({}) {
  const { login } = useAuth();
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const handleLogin = async (command) => {
    const res: any = await userService.login(command);
    login(res?.value?.token);
  };

  const openAppStore = () => {
    const link =
      'itms-apps://apps.apple.com/app/elyte-sports/id1672184038';
    Linking.canOpenURL(link).then(
      (supported) => supported && Linking.openURL(link),
      (err) => console.log(err)
    );
  };

  const openGooglePlay = () => {
    Linking.openURL(
      'http://play.google.com/store/apps/details?id=com.google.android.apps.maps'
    );
  };

  // Alert.alert(
  //   'Apply update',
  //   'Hey there! We got an update for you 🥳🎉.',
  //   [
  //     {
  //       text: 'Cancel',
  //     },
  //     { text: 'OK', onPress: () => openAppStore() },
  //   ]
  // );

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
