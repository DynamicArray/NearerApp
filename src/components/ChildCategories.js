import React from 'react';
import {windowWidth, windowHeight} from '../functions';
import {Category} from '../components';
import {View, Animated} from 'react-native';

export const ChildCategories = ({categories, animatedController}) => {
  const bodyHeight = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: [
      0,
      categories.length * (windowWidth * 0.02 + windowHeight * 0.04),
    ],
  });
  return (
    <Animated.View
      style={{
        height: bodyHeight,
        overflow: 'hidden',
      }}>
      <View>
        {categories.map(category => (
          <Category
            key={category.id}
            category={category}
            extraStyle={{
              height: windowHeight * 0.04,
              paddingLeft: windowWidth * 0.2,
            }}
          />
        ))}
      </View>
    </Animated.View>
  );
};
