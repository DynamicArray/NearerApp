import React from 'react';
import {useAtom} from 'jotai';
import {
  showOnlyOpen,
  userLocation,
  windowWidth,
  showFromMarker,
  markerLocation,
} from '../functions';
import {View, Text, Switch} from 'react-native';

export const MapOptions = () => {
  const [open, setOpen] = useAtom(showOnlyOpen);
  const [fromMarker, setFrom] = useAtom(showFromMarker);
  const [, setLocation] = useAtom(userLocation);
  const [marker] = useAtom(markerLocation);

  return (
    <View style={{marginTop: windowWidth * 0.1}}>
      <View
        style={{
          marginBottom: windowWidth * 0.1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: windowWidth,
        }}>
        <Text
          style={{color: '#000', marginRight: 15, width: windowWidth * 0.35}}>
          Use my location
        </Text>
        <Switch
          trackColor={{true: '#c7c7c7', false: '#c7c7c7'}}
          thumbColor="#cd3144"
          ios_backgroundColor="#c7c7c7"
          value={fromMarker}
          onValueChange={() => {
            if (!fromMarker && marker) {
              setLocation(marker);
            }
            setFrom(!fromMarker);
          }}
        />
        <Text
          style={{color: '#000', marginLeft: 15, width: windowWidth * 0.35}}>
          Use map marker location
        </Text>
      </View>
      <View
        style={{
          marginBottom: windowWidth * 0.1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: windowWidth,
        }}>
        <Text
          style={{color: '#000', marginRight: 15, width: windowWidth * 0.35}}>
          Show all businesses
        </Text>
        <Switch
          trackColor={{true: '#c7c7c7', false: '#c7c7c7'}}
          thumbColor="#cd3144"
          ios_backgroundColor="#c7c7c7"
          value={open}
          onValueChange={() => setOpen(!open)}
        />
        <Text
          style={{color: '#000', marginLeft: 15, width: windowWidth * 0.35}}>
          Show only open businesses
        </Text>
      </View>
    </View>
  );
};
