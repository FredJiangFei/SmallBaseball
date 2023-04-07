import {
  AddIcon,
  Divider,
  Fab,
  FlatList,
  IconButton,
  Input,
  VStack,
} from 'native-base';
import React from 'react';
import { Event } from '../../models/Event';
import EventCard from './components/EventCard';
import { SbContainer } from '../../components';
import { AntDesign } from '@expo/vector-icons';
import { CommonActions } from '@react-navigation/native';

const events: Event[] = [
  {
    id: 1,
    title: 'Frank Sinatra',
    subTitle: 'Either you run the day, or the day runs you.',
    text: `People often say that motivation doesn't last. Well, neither does bathing. That's why we recommend it daily.`,
    time: ' 6 mins ago',
    image:
      'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
  },
  {
    id: 2,
    title: 'The Garden City',
    subTitle: 'The Silicon Valley of India.',
    text: `Bengaluru (also called Bangalore) is the center of India's high-tech industry. The city is also known for its parks and nightlife.`,
    time: ' 6 mins ago',
    image:
      'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
  },
  {
    id: 3,
    title: 'The Garden City',
    subTitle: 'The Silicon Valley of India.',
    text: `Bengaluru (also called Bangalore) is the center of India's high-tech industry. The city is also known for its parks and nightlife.`,
    time: ' 6 mins ago',
    image:
      'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  },
];

export default function EventsScreen({ navigation }) {
  const handleSearchPress = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'SearchEvent',
      })
    );
  };

  React.useEffect(() => {
    navigation.setOptions({
      header: () => (
        <VStack bgColor="white" h={12} px={2} justifyContent="center">
          <Input
            onFocus={handleSearchPress}
            height={8}
            placeholder="Search Events"
            InputRightElement={
              <IconButton
                onPress={handleSearchPress}
                colorScheme="indigo"
                size="sm"
                variant="solid"
                _icon={{ as: AntDesign, name: 'search1' }}
              />
            }
          />
        </VStack>
      ),
    });
  }, [navigation]);

  return (
    <SbContainer>
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
    </SbContainer>
  );
}
