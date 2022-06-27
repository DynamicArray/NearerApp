import React, {useState} from 'react';
import {toggleListItem, windowWidth} from '../functions';
import {Icons, Category} from '../components';
import {View, TouchableWithoutFeedback, Animated} from 'react-native';

export const ParentCategorySegment = ({
  category,
  animatedController,
  toggle,
}) => {
  const ChevronIcon = Icons['chevronDown'];
  const [open, setOpen] = useState(false);
  const arrowAngle = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0rad', `${Math.PI}rad`],
  });
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: windowWidth * 0.825 + 10,
      }}>
      <Category category={category} />
      <TouchableWithoutFeedback
        onPress={() => {
          toggle(true);
          toggleListItem(open, setOpen, animatedController, toggle);
        }}>
        <Animated.View
          style={{transform: [{rotateZ: arrowAngle}], padding: 10}}>
          <ChevronIcon />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};
