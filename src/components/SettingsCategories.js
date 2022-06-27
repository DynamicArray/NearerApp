import React, {useState} from 'react';
import {useAtom} from 'jotai';
import {windowHeight, nearerCategories, inputStyle} from '../functions';
import {FlatList, ActivityIndicator, View, TextInput, Text} from 'react-native';
import {ParentCategory, Category} from '../components';

export const SettingsCategories = () => {
  const [allCategories] = useAtom(nearerCategories);
  const [categories, setCategories] = useState(allCategories);
  const [changing, setChanging] = useState(false);
  if (!Array.isArray(categories))
    return <ActivityIndicator style={{margin: 10}} />;
  return (
    <View style={{height: windowHeight * 0.7}}>
      <View style={{margin: windowHeight * 0.025}}>
        <TextInput
          style={inputStyle}
          onChangeText={query => {
            if (query.length === 1 || query.length === 2) {
              setChanging(true);
            } else {
              setChanging(false);
            }
            if (query.length > 2) {
              setCategories(limitCategories(query, allCategories));
            } else if (!query || query === '') {
              setCategories(allCategories);
            }
          }}
          placeholder="Find Categories..."
        />
      </View>
      {categories.length === 0 && !changing ? (
        <Text style={{textAlign: 'center'}}>
          No categories match your search
        </Text>
      ) : null}
      {changing ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={categories}
          renderItem={({item}) => {
            if (item.children) {
              return <ParentCategory category={item} />;
            } else {
              return <Category category={item} />;
            }
          }}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

const limitCategories = (query, allCategories) => {
  let categories = [];
  let l = allCategories.length;
  for (let i = 0; i < l; i++) {
    if (allCategories[i].name.toLowerCase().includes(query.toLowerCase())) {
      categories.push({id: allCategories[i].id, name: allCategories[i].name});
    }

    const children = allCategories[i].children;
    if (children) {
      let cl = children.length;
      for (let ci = 0; ci < cl; ci++) {
        if (children[ci].name.toLowerCase().includes(query.toLowerCase())) {
          categories.push({id: children[ci].id, name: children[ci].name});
        }
      }
    }
  }
  return categories;
};
