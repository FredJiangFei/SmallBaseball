import { StyleSheet } from 'react-native';
import React from 'react';
import { CheckIcon, Select } from 'native-base';

export default function SbSelect() {
  const [value, setValue] = React.useState('');

  return (
    <Select
      selectedValue={value}
      placeholder="Choose Event Type"
      _selectedItem={{
        endIcon: (
          <CheckIcon color="#17C476" style={styles.checkIcon} size="5" />
        ),
      }}
      onValueChange={setValue}
    >
      <Select.Item label="Tournaments" value="Tournaments" />
      <Select.Item label="Games" value="Games" />
      <Select.Item label="Pratices" value="Pratices" />
    </Select>
  );
}

const styles = StyleSheet.create({
  checkIcon: {
    position: 'absolute',
    right: 0,
  },
});
