import React from 'react';
import { Input } from 'native-base';

export default function SbInput({ placeholder, onChangeText }) {
  return (
    <Input
      autoCapitalize="none"
      spellCheck={false}
      autoCorrect={false}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
}
