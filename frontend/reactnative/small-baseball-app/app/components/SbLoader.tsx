import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Spinner } from 'native-base';

export default function SbLoader() {
  return (
    <View style={styles.container}>
      <Spinner size="lg" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    opacity: 0.5,
    zIndex: 1,
    height: '100%',
    width: '100%',
  },
});
