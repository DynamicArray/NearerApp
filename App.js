import React, {Suspense, useEffect} from 'react';

import {ActivityIndicator, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  tabOptions,
  Icons,
  Help,
  MapPage,
  StateSetters,
  HomeStack,
  FeedStack,
  GeoLocate,
  interstitial,
  initAds,
} from './src';

const Tab = createBottomTabNavigator();

const App = () => {
  initAds();
  const HomeIcon = Icons['home'];
  const InfoIcon = Icons['info'];
  const CompassIcon = Icons['compass'];
  const MapIcon = Icons['map'];

  useEffect(() => {
    interstitial().load();
  }, []);

  return (
    <Suspense fallback={<ActivityIndicator />}>
      <GeoLocate />
      <StateSetters />
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
              ...tabOptions,
              tabBarIcon: ({color}) => <HomeIcon color={color} />,
            }}
          />
          <Tab.Screen
            name="Categories"
            component={FeedStack}
            options={{
              ...tabOptions,
              tabBarIcon: ({color}) => <CompassIcon color={color} />,
            }}
          />
          <Tab.Screen
            name="Map"
            component={MapPage}
            options={{
              ...tabOptions,
              tabBarIcon: ({color}) => <MapIcon color={color} />,
            }}
          />
          <Tab.Screen
            name="Help"
            component={Help}
            options={{
              ...tabOptions,
              tabBarIcon: ({color}) => <InfoIcon color={color} />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Suspense>
  );
};

export default App;
