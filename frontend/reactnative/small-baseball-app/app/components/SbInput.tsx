import React from 'react';
import { Input } from 'native-base';

export default function SbInput({ placeholder, onChangeText, ...rest }) {
  return (
    <Input
      autoCapitalize="none"
      spellCheck={false}
      autoCorrect={false}
      placeholder={placeholder}
      onChangeText={onChangeText}
      {...rest}
    />
  );
}
