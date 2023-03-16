import React from 'react';
import { Button, Column, Heading, Input, TextArea, View } from 'native-base';
import { SbForm, SbSelect } from '../../components';
import { Option } from '../../models/Option';

const options: Option[] = [
  {
    label: 'Tournaments',
    value: 'Tournaments',
  },
  {
    label: 'Games',
    value: 'Games',
  },
  {
    label: 'Pratices',
    value: 'Pratices',
  },
];

export default function CreateEventScreen() {
  return (
    <View px={2}>
      <Heading variant="title">Create Event</Heading>
      <SbForm>
        <Input placeholder="Title" />
        <TextArea placeholder="Description" autoCompleteType="" />
        <SbSelect placeholder="Choose Event Type" options={options} />
        <Button>Create</Button>
      </SbForm>
    </View>
  );
}
