import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  ChevronLeftIcon,
  IconButton,
  Input,
  Pressable,
  Row,
} from 'native-base';
import { AntDesign } from '@expo/vector-icons';

export default function SearchEventScreen({ navigation }) {
  React.useEffect(() => {
    navigation.setOptions({
      header: () => (
        <Row bgColor="white" h={12} px={2} alignItems="center">
          <Pressable mr={2} onPress={() => navigation.goBack()}>
            <ChevronLeftIcon />
          </Pressable>
          <Input
            flex={1}
            autoFocus
            height={8}
            placeholder="Search Events"
            InputRightElement={
              <IconButton
                colorScheme="indigo"
                size="sm"
                variant="solid"
                _icon={{ as: AntDesign, name: 'search1' }}
              />
            }
          />
        </Row>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>SearchEventScreen</Text>
    </View>
  );
}
