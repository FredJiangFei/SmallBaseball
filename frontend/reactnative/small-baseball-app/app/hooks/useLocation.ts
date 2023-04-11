import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

const useLocation = () => {
  const [location, setLocation] = useState<any>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  useEffect(() => {
    
    getLocation();
  }, []);

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;

      const res: any = await Location.getLastKnownPositionAsync();
      setLocation({
        latitude: res.coords.latitude,
        longitude: res.coords.longitude,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return { location, setLocation };
};

export default useLocation;
