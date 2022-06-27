import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SettingsCategories, SelectedCategories} from '../components';
import {topTabOptions} from '../functions';

const TopTab = createMaterialTopTabNavigator();

export const SettingsTabs = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen
        name={'Filter Categories'}
        component={SettingsCategories}
        options={topTabOptions}
      />
      <TopTab.Screen
        name={'My Categories'}
        component={SelectedCategories}
        options={topTabOptions}
      />
    </TopTab.Navigator>
  );
};
