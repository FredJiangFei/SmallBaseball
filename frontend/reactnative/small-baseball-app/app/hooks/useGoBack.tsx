import React from 'react';
import { ChevronLeftIcon, Pressable } from 'native-base';

export default function useGoBack({ navigation }) {
  React.useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable pl={2} onPress={() => navigation.goBack()}>
          <ChevronLeftIcon />
        </Pressable>
      ),
    });
  }, [navigation]);
}
