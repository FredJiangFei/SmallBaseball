import { Avatar, Column, Pressable, Row, Text } from 'native-base';
import React from 'react';
import colors from '../config/colors';

type PropType = {
  title: string;
  description?: string;
  image?: any;
  IconComponent?: any;
  onPress?: any;
};

const ListItem: React.FC<PropType> = ({
  title,
  description,
  image,
  IconComponent,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress}>
      <Row
        p={4}
        _dark={{
          backgroundColor: 'gray.700',
        }}
        _light={{
          backgroundColor: 'gray.50',
        }}
      >
        {IconComponent}
        {image && <Avatar size="lg" source={image} />}
        <Column justifyContent="center" pl={2}>
          <Text bold>{title}</Text>
          {description && (
            <Text color={colors.medium} numberOfLines={2}>
              {description}
            </Text>
          )}
        </Column>
      </Row>
    </Pressable>
  );
};

export default ListItem;
