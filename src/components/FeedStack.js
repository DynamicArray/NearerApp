import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SingleListing,
  CategoryFeeds,
  SettingsTabs,
  CategoryFeed,
} from '../components';
import {stackOptions} from '../functions';

const Stack = createNativeStackNavigator();

export const FeedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="My Listings"
        component={CategoryFeeds}
        options={{
          ...stackOptions,
        }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsTabs}
        options={{
          ...stackOptions,
        }}
      />
      <Stack.Screen
        name="Listing"
        component={SingleListing}
        options={{
          ...stackOptions,
        }}
      />
      <Stack.Screen
        name="Categorised Listings"
        component={CategoryFeed}
        options={{
          ...stackOptions,
        }}
      />
    </Stack.Navigator>
  );
};
