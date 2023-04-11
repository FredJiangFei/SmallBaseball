import React from 'react';
import { Button, Heading, Input, Pressable, Row, TextArea, useDisclose } from 'native-base';
import { SbContainer, SbForm, SbSelect } from '../../components';
import { Option } from '../../models/Option';
import { Ionicons } from '@expo/vector-icons';
import EventLocation from './components/EventLocation';

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
  const { isOpen, onOpen, onClose } = useDisclose();

  return (
    <SbContainer>
      <Heading>Create Event</Heading>
      <SbForm>
        <Input placeholder="Title" />
        <TextArea placeholder="Description" autoCompleteType="" />
        <SbSelect placeholder="Choose Event Type" options={options} />
        <Row alignItems="center">
          <Input placeholder="Address" flex={1} />
          <Pressable onPress={onOpen} hitSlop={8} ml={3} mr={1}>
            <Ionicons name="location-outline" size={26} />
          </Pressable>
        </Row>
        <Button>Create</Button>
        {isOpen && <EventLocation isOpen={isOpen} onClose={onClose} />}
      </SbForm>
    </SbContainer>
  );
}
