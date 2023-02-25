import React from 'react';
import {
  AspectRatio,
  Box,
  Center,
  Heading,
  Image,
  Row,
  Stack,
  Text,
} from 'native-base';
import { Event } from '../../../models/Event';

type PropType = {
  event: Event;
};

const EventCard: React.FC<PropType> = ({ event }) => {
  return (
    <Box alignItems="center">
      <Box
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _light={{
          backgroundColor: 'gray.50',
        }}
      >
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: event.image,
              }}
              alt="image"
            />
          </AspectRatio>
          <Center
            bg="violet.500"
            _dark={{
              bg: 'violet.400',
            }}
            _text={{
              color: 'warmGray.50',
              fontWeight: '700',
              fontSize: 'xs',
            }}
            position="absolute"
            bottom="0"
            px="3"
            py="1.5"
          >
            PHOTOS
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading ml="-1">{event.title}</Heading>
            <Text
              _light={{
                color: 'violet.500',
              }}
              _dark={{
                color: 'violet.400',
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1"
            >
              {event.subTitle}
            </Text>
          </Stack>
          <Text>{event.text}</Text>
          <Row alignItems="center" space={4} justifyContent="space-between">
            <Row alignItems="center">
              <Text
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}
              >
                {event.time}
              </Text>
            </Row>
          </Row>
        </Stack>
      </Box>
    </Box>
  );
};

export default EventCard;
