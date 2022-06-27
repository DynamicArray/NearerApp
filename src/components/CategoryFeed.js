import React, {useEffect, useState} from 'react';
import {FlatList, ActivityIndicator, View} from 'react-native';
import {useAtom} from 'jotai';
import {getListings, showOnlyOpen, userLocation} from '../functions';
import {ListingTile} from '../components';

export const CategoryFeed = ({route, navigation}) => {
  const [listings, setListings] = useState([]);
  const [listingCount, setCount] = useState(10);
  const [open] = useAtom(showOnlyOpen);
  const [location] = useAtom(userLocation);

  useEffect(() => {
    getListings(
      setListings,
      location,
      open,
      listingCount,
      route.params.category,
    );
  }, [setListings, listingCount, open, location]);
  useEffect(() => {
    if (route.params.categoryLabel) {
      navigation.setOptions({title: route.params.categoryLabel});
    }
  }, [route.params]);

  if (!listings) return <ActivityIndicator />;
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={listings}
        renderItem={({item, index}) => (
          <ListingTile
            index={index}
            push={route.params.push}
            listing={item}
            category={route.params.category}
          />
        )}
        onEndReached={() => setCount(listingCount + 10)}
        onEndReachedThreshold={0.75}
        ListFooterComponentStyle={{
          padding: 25,
        }}
        style={{backgroundColor: '#fff'}}
      />
    </View>
  );
};
