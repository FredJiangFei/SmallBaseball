import React from 'react';
import { View } from 'native-base';

export default function SbContainer({ children }) {
  return <View px={2}>{children}</View>;
}
