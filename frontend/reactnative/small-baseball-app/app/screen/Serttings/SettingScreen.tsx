import { Row, Switch, Text, useColorMode } from 'native-base';
import React, { useState } from 'react';
import { SbContainer } from '../../components';

export default function SettingScreen() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isDark, setIsDark] = useState(colorMode === 'dark');

  return (
    <SbContainer pt={2} flex={1}>
      <Row justifyContent="space-between" alignItems="center">
        <Text>Dark Mode</Text>
        <Switch value={isDark} size="sm" onToggle={() => {
          setIsDark(pre => !pre);
          toggleColorMode();
        }} />
      </Row>
    </SbContainer>
  );
}
