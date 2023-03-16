import { AddIcon, Divider, Fab, FlatList, View } from 'native-base';
import React from 'react';
import { Event } from '../../models/Event';
import EventCard from './components/EventCard';

const events: Event[] = [
  {
    title: 'Frank Sinatra',
    subTitle: 'Either you run the day, or the day runs you.',
    text: `People often say that motivation doesn’t last. Well, neither does bathing. That’s why we recommend it daily.`,
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

export default function EventsScreen({ navigation }) {
  return (
    <View px={2}>
      <FlatList
        data={events}
        ItemSeparatorComponent={() => <Divider my={1} />}
        renderItem={({ item }) => <EventCard event={item} />}
      />
      <Fab
        onPress={() => navigation.navigate('CreateEvent')}
        renderInPortal={false}
        shadow={2}
        size="sm"
        icon={<AddIcon />}
      />
    </View>
  );
}
