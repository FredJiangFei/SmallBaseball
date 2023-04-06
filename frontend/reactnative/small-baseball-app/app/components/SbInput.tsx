import React from 'react';
import { Input, IInputProps } from 'native-base';

const SbInput: React.FC<IInputProps> = (props) => {
  return (
    <Input
      autoCapitalize="none"
      spellCheck={false}
      autoCorrect={false}
      {...props}
    />
  );
};

export default SbInput;
