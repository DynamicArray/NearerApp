import React, {useEffect, useState} from 'react';
import {useAtom} from 'jotai';
import {windowHeight, updateLocation, userLocation} from '../functions';
import {ScrollView, RefreshControl} from 'react-native';
import {Map, MapOptions} from '../components';

export const MapPage = ({navigation}) => {
  const [, setLocation] = useAtom(userLocation);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, [navigation]);

  return (
    <ScrollView
      style={{backgroundColor: '#fff', height: windowHeight}}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => updateLocation(setLocation, setRefreshing)}
        />
      }>
      <Map />
      <MapOptions />
    </ScrollView>
  );
};
