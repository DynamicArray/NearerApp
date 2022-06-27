import React from 'react';
import {useAtom} from 'jotai';
import DraggableFlatList from 'react-native-draggable-flatlist';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Text} from 'react-native';
import {SelectedCategory} from '../components';
import {
  savedCategories,
  windowWidth,
  windowHeight,
  updateCategories,
} from '../functions';

export const SelectedCategories = () => {
  const [categories, setCategories] = useAtom(savedCategories);
  if (!Array.isArray(categories) || categories.length === 0)
    return <NoCategories />;
  return (
    <GestureHandlerRootView>
      <DraggableFlatList
        data={categories}
        keyExtractor={item => item.id}
        renderItem={({item, drag, isActive}) => (
          <SelectedCategory category={item} drag={drag} isActive={isActive} />
        )}
        onDragEnd={({data}) => {
          updateCategories(null, data, setCategories);
        }}
        style={{marginTop: windowHeight * 0.025}}
      />
    </GestureHandlerRootView>
  );
};

const NoCategories = () => {
  return (
    <Text
      style={{
        margin: windowWidth * 0.1,
        textAlign: 'center',
        color: '#1c1c1e',
      }}>
      You haven't selected any categories
    </Text>
  );
};
