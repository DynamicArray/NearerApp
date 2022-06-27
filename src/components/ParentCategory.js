import React, {useRef, useState} from 'react';
import {ChildCategories, ParentCategorySegment} from '../components';
import {View, Animated} from 'react-native';

export const ParentCategory = ({category}) => {
  const animatedController = useRef(new Animated.Value(0)).current;
  const [toggledDropdown, setToggle] = useState(false);
  return (
    <View style={{marginBottom: 10}}>
      <ParentCategorySegment
        category={category}
        animatedController={animatedController}
        toggle={setToggle}
      />
      {toggledDropdown ? (
        <ChildCategories
          categories={category.children}
          animatedController={animatedController}
        />
      ) : null}
    </View>
  );
};
