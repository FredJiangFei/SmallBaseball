import React from 'react';
import {
  AspectRatio,
  Box,
  Button,
  Center,
  Heading,
  Image,
  Pressable,
  Row,
  Stack,
  Text,
  useDisclose,
} from 'native-base';
import { Event } from '../../../models/Event';
import SbMenu from '../../../components/SbMenu';
import { Action } from '../../../models/Action';
import { SbConfirm } from '../../../components';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

type PropType = {
  event: Event;
};

const EventCard: React.FC<PropType> = ({ event }) => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclose();
  const nav: NavigationProp<ParamListBase> = useNavigation();

  const actions: Action[] = [
    {
      label: 'Delete',
      onPress: () => {
        onDeleteOpen();
        onClose();
      },
    },
    {
      label: 'Share',
      disabled: true,
    },
  ];

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
          <Pressable onPress={() => nav.navigate('EventDetails', { id: event.id })}>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image resizeMode="contain" 
                source={{
                  uri: event.image,
                }}
                alt="image"
              />
            </AspectRatio>
          </Pressable>
          <Button onPress={onOpen} position="absolute" right={1} top={1}>
            Menu
          </Button>
          <SbMenu isOpen={isOpen} onClose={onClose} actions={actions} />
          <SbConfirm
            isOpen={isDeleteOpen}
            onClose={onDeleteClose}
            title="Delete Event"
            content="Are you sure to delete this event?"
          />
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
