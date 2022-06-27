import React, {useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {ListingTile} from '../components';
import {
  getListings,
  showOnlyOpen,
  userLocation,
  updateLocation,
} from '../functions';
import {useAtom} from 'jotai';

export const HomeFeed = () => {
  const [listings, setListings] = useState([]);
  const [listingCount, setCount] = useState(10);
  const [refreshing, setRefreshing] = useState(false);
  const [open] = useAtom(showOnlyOpen);
  const [location, setLocation] = useAtom(userLocation);
  useEffect(() => {
    getListings(setListings, location, open, listingCount);
  }, [setListings, listingCount, open, location]);

  if (!Array.isArray(listings) || listings.length === 0)
    return <ActivityIndicator style={{margin: 10}} />;
  return (
    <View>
      <FlatList
        data={listings}
        renderItem={({item, index}) => (
          <ListingTile index={index} listing={item} />
        )}
        keyExtractor={(item, index) => parseInt(item.id) ?? parseInt(index)}
        onEndReached={() => setCount(listingCount + 10)}
        onEndReachedThreshold={0.75}
        ListFooterComponentStyle={{
          padding: 25,
        }}
        style={{backgroundColor: '#fff'}}
        onRefresh={() => {
          setRefreshing(true);
          updateLocation(setLocation);
          setRefreshing(false);
        }}
        refreshing={refreshing}
      />
    </View>
  );
};
