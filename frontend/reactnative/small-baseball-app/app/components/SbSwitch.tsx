import { Text } from 'react-native'
import React, { useState } from 'react'
import { Row, Switch } from 'native-base';

type PropType = {
    text: string;
    defaultIsChecked: boolean;
    onSwitch: any;
};
  
const SbSwitch: React.FC<PropType> = ({ text, defaultIsChecked, onSwitch }) => {
  const [isChecked, setIsChecked] = useState(defaultIsChecked);

  return (
    <Row justifyContent="space-between" alignItems="center">
        <Text>{text}</Text>
        <Switch value={isChecked}  size="sm" onToggle={() => {
          setIsChecked(pre => !pre);
          onSwitch();
        }} />
      </Row>
  )
}

export default SbSwitch;