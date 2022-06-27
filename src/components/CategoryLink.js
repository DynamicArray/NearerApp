import React from 'react';
import {Pressable, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const CategoryLink = ({category, push, style = null}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => {
        if (push) {
          navigation.push('Categorised Listings', {
            category: category.term_id,
            categoryLabel: category.name,
            push: true,
          });
        } else {
          navigation.goBack();
        }
      }}>
      <Text
        style={
          style ?? {
            padding: 3,
            marginRight: 2,
            borderColor: '#cd3144',
            borderWidth: 1,
            borderRadius: 3,
            textAlign: 'left',
            color: '#1c1c1e',
          }
        }>
        {category.name}
      </Text>
    </Pressable>
  );
};
