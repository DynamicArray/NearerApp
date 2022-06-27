import React from 'react';
import {useAtom} from 'jotai';
import MapView, {Marker} from 'react-native-maps';
import {
  userLocation,
  markerLocation,
  windowWidth,
  windowHeight,
  mapStyle,
  showFromMarker,
} from '../functions';

export const Map = () => {
  const [location, setLocation] = useAtom(userLocation);
  const [fromMarker] = useAtom(showFromMarker);
  const [marker, setMarker] = useAtom(markerLocation);

  if (!location) return null;
  return (
    <MapView
      style={{width: windowWidth, height: windowHeight * 0.5}}
      initialRegion={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      onRegionChangeComplete={region => {
        if (fromMarker) {
          setLocation(region);
        }
      }}
      onRegionChange={region => setMarker(region)}
      customMapStyle={mapStyle}>
      <Marker coordinate={marker ?? location} pinColor="#5b9cdd" />
    </MapView>
  );
};
