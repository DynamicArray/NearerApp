import React, {useEffect} from 'react';
import {useAtom} from 'jotai';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {CategoryFeed} from '../components';
import {topTabOptions, savedCategories, windowWidth} from '../functions';
import {TouchableWithoutFeedback, Text} from 'react-native';

const TopTab = createMaterialTopTabNavigator();

export const CategoryFeeds = ({navigation}) => {
  const [categories] = useAtom(savedCategories);
  useEffect(() => {
    if (!Array.isArray(categories) || categories.length === 0) {
      navigation.navigate('Settings');
    }
    navigation.setOptions({
      headerShadowVisible: false,
      headerTitle: '',
      title: '',
      headerRight: () => <Edit nav={navigation} />,
    });
  }, [navigation, categories]);
  if (!Array.isArray(categories) || categories.length === 0)
    return <NoCategories />;
  return (
    <TopTab.Navigator>
      {categories.map(category => (
        <TopTab.Screen
          name={category.name.replace('amp;', '')}
          component={CategoryFeed}
          options={topTabOptions}
          initialParams={{category: category.id}}
          key={category.id}
        />
      ))}
    </TopTab.Navigator>
  );
};

const NoCategories = () => {
  return (
    <Text
      style={{
        color: '#1c1c1e',
        margin: windowWidth * 0.1,
        textAlign: 'center',
      }}>
      Please select at least one category to see listings appear here
    </Text>
  );
};

const Edit = ({nav}) => {
  return (
    <TouchableWithoutFeedback
      style={{padding: 10}}
      onPress={() => nav.navigate('Settings')}>
      <Text
        style={{
          color: '#fff',
          width: windowWidth * 0.25,
          textAlign: 'right',
        }}>
        Edit
      </Text>
    </TouchableWithoutFeedback>
  );
};
