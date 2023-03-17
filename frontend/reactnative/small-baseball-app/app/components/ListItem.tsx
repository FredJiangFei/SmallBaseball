import { Avatar, Image, Pressable, Text, View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
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
      <View style={styles.container}>
        {IconComponent}
        {image && <Avatar size="lg" source={image} />}
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          {description && (
            <Text style={styles.description} numberOfLines={2}>
              {description}
            </Text>
          )}
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '500',
  },
  description: {
    color: colors.medium,
  },
});

export default ListItem;
