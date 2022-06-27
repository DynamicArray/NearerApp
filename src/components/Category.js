import React from 'react';
import {useAtom} from 'jotai';
import {
  windowWidth,
  checkboxStyle,
  updateCategories,
  savedCategories,
} from '../functions';
import {CategoryCheckbox} from '../components';
import {Text, View, TouchableWithoutFeedback} from 'react-native';

export const Category = ({category, extraStyle = {}}) => {
  const [categories, setCategories] = useAtom(savedCategories);
  const style = {
    ...checkboxStyle(),
    ...extraStyle,
  };
  return (
    <View style={style}>
      <CategoryCheckbox category={category} />
      <TouchableWithoutFeedback
        onPress={() => updateCategories(category, categories, setCategories)}>
        <Text
          style={{
            margin: windowWidth * 0.01,
            marginLeft: windowWidth * 0.025,
            color: '#1c1c1e',
          }}
          numberOfLines={1}>
          {category.name.replace('amp;', '')}
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};
