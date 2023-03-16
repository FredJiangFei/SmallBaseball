import { StyleSheet } from 'react-native';
import React from 'react';
import { CheckIcon, Select } from 'native-base';
import { Option } from '../models/Option';
import colors from '../config/colors';

type PropType = {
  placeholder: string;
  options: Option[];
};

const SbSelect: React.FC<PropType> = (props) => {
  const { placeholder, options } = props;
  const [value, setValue] = React.useState('');

  return (
    <Select
      selectedValue={value}
      placeholder={placeholder}
      _selectedItem={{
        endIcon: (
          <CheckIcon color={colors.secondary} style={styles.checkIcon} size="5" />
        ),
      }}
      onValueChange={setValue}
    >
      {options?.map((item) => (
        <Select.Item key={item.value} label={item.label} value={item.value} />
      ))}
    </Select>
  );
};

const styles = StyleSheet.create({
  checkIcon: {
    position: 'absolute',
    right: 0,
  },
});
export default SbSelect;
