import React from 'react';
import { Heading } from 'native-base';
import { SbContainer } from '../../components';
import { useRoute } from '@react-navigation/native';

export default function EventDetailsScreen() {
  const route: any = useRoute();

  return (
    <SbContainer>
      <Heading>Event Details {route?.params?.id}</Heading>
    </SbContainer>
  );
}
