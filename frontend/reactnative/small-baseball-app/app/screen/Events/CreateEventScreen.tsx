import React from 'react';
import { Button, Column, Heading, Input, TextArea, View } from 'native-base';
import { SbSelect } from '../../components';

export default function CreateEventScreen() {
  return (
    <View px={2}>
      <Heading variant="title">Create Event</Heading>
      <Column space={4}>
        <Input placeholder="Title" />
        <TextArea placeholder="Description" autoCompleteType="" />
        <SbSelect />
        <Button>Create</Button>
      </Column>
    </View>
  );
}
