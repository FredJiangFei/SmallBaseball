import React from 'react';
import { Button, Heading, Input, TextArea } from 'native-base';
import { SbContainer, SbForm, SbSelect } from '../../components';
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
    <SbContainer>
      <Heading>Create Event</Heading>
      <SbForm>
        <Input placeholder="Title" />
        <TextArea placeholder="Description" autoCompleteType="" />
        <SbSelect placeholder="Choose Event Type" options={options} />
        <Button>Create</Button>
      </SbForm>
    </SbContainer>
  );
}
