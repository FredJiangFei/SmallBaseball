import React from 'react';
import { View } from 'native-base';
import { InterfaceViewProps } from 'native-base/lib/typescript/components/basic/View/types';
import { ColorSchemeType } from 'native-base/lib/typescript/components/types';
import colors from '../config/colors';

type PropType = {
  variant?: unknown;
  size?: unknown;
  colorScheme?: ColorSchemeType;
};

const SbContainer: React.FC<InterfaceViewProps & PropType> = ({
  children,
  ...rest
}) => {
  return (
    <View
      px={2}
      _dark={{
        bg: colors.dark,
      }}
      {...rest}
    >
      {children}
    </View>
  );
};

export default SbContainer;
