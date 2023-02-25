import { AddIcon, Divider, Fab, FlatList, Icon, View } from 'native-base';
import React from 'react';
import { Event } from '../../models/Event';
import EventCard from './components/EventCard';

const events: Event[] = [
  {
    title: 'The Garden City',
    subTitle: 'The Silicon Valley of India.',
    text: `Bengaluru (also called Bangalore) is the center of India's high-tech industry. The city is also known for its parks and nightlife.`,
    time: ' 6 mins ago',
    image:
      'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
  },
  {
    title: 'The Garden City',
    subTitle: 'The Silicon Valley of India.',
    text: `Bengaluru (also called Bangalore) is the center of India's high-tech industry. The city is also known for its parks and nightlife.`,
    time: ' 6 mins ago',
    image:
      'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
  },
];

export default function EventsScreen() {
  return (
    <View px={2}>
      <FlatList
        data={events}
        ItemSeparatorComponent={() => <Divider my={1} />}
        renderItem={({ item }) => <EventCard event={item} />}
      />
      <Fab renderInPortal={false} shadow={2} size="sm" icon={<AddIcon />} />
      {/* <Box
        p="2"
        m="2"
        _text={{ fontSize: 'md', fontWeight: 'bold', color: 'white' }}
      >
        Events
      </Box>
      <Box
        variant="linear"
        p="2"
        m="2"
        _text={{ fontSize: 'md', fontWeight: 'bold', color: 'white' }}
      >
        Events
      </Box>
      <Text>Color: {colorMode}</Text>
      <Button onPress={toggleColorMode}>Toggle Color Mode</Button> */}
    </View>
  );
}
