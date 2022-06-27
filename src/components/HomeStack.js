import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeFeed, SingleListing, CategoryFeed} from '../components';
import {stackOptions} from '../functions';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Near Me"
        component={HomeFeed}
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
