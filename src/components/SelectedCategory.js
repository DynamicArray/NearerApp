import React from 'react';
import {ScaleDecorator} from 'react-native-draggable-flatlist';
import {Text, TouchableOpacity, View} from 'react-native';
import {Icons, CategoryCheckbox} from '../components';
import {windowWidth, checkboxStyle} from '../functions';

export const SelectedCategory = ({category, drag, isActive}) => {
  const BarIcon = Icons['bars'];
  if (!category) return null;
  return (
    <ScaleDecorator key={category} style={{width: windowWidth}}>
      <TouchableOpacity
        onPressIn={drag}
        activeOpacity={1}
        disabled={isActive}
        style={checkboxStyle(isActive)}>
        <CategoryCheckbox category={category} isTrue={true} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: windowWidth * 0.6,
          }}>
          <Text
            style={{
              margin: windowWidth * 0.01,
              marginLeft: windowWidth * 0.03,
              color: isActive ? '#cd3144' : '#000',
            }}>
            {category.name.replace('amp;', '')}
          </Text>
          <BarIcon color={isActive ? '#cd3144' : '#000'} />
        </View>
      </TouchableOpacity>
    </ScaleDecorator>
  );
};
