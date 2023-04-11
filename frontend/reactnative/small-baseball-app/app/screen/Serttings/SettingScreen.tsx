import { useColorMode } from 'native-base';
import React from 'react';
import { SbContainer, SbSwitch } from '../../components';

export default function SettingScreen() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <SbContainer pt={2} flex={1}>
      <SbSwitch text='Dark Mode' defaultIsChecked={colorMode === 'dark'} onSwitch={toggleColorMode}/>
    </SbContainer>
  );
}
