import { Box, Button, Text, useColorMode } from 'native-base';
import React from 'react';

export default function EventsScreen() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        p="2"
        m="2"
        _text={{ fontSize: 'md', fontWeight: 'bold', color: 'white' }}
      >
        Events
      </Box>
      <Box
        variant="linear"
        p="2"
        m="2"
        _text={{ fontSize: 'md', fontWeight: 'bold', color: 'white' }}
      >
        Events
      </Box>
      <Text>Color: {colorMode}</Text>
      <Button onPress={toggleColorMode}>Toggle Color Mode</Button>
    </>
  );
}
