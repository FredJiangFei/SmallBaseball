import { StyleSheet } from 'react-native';
import React from 'react';
import { Box, Button, Heading, Modal, Row, View } from 'native-base';
import useLocation from '@sb/hooks/useLocation';
import MapView, { Marker } from 'react-native-maps';

export default function EventLocation({ isOpen, onClose }) {
  const { location, setLocation } = useLocation();

  return (
    <Modal isOpen={isOpen} onClose={onClose} safeAreaTop={true}>
      <Modal.Content style={{ marginTop: 'auto', width: '100%', height: 500 }}>
        <Row justifyContent="space-between" px={1} my={1}>
          <Button w={16} onPress={onClose}>Cancel</Button>
          <Button w={16}>Save</Button>
        </Row>
        <View style={styles.container}>
          <MapView
            style={styles.map}
            region={location}
            onRegionChangeComplete={region => setLocation(region)}>
            <Box w={10} h={10}>
              <Marker coordinate={location} image={require('../../../../assets/marker.png')} />
            </Box>
          </MapView>
        </View>
      </Modal.Content>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%'
  },
});
