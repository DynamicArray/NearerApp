import React, {useEffect, useState} from 'react';
import {useAtom} from 'jotai';
import {TouchableHighlight, View, Text, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {
  windowWidth,
  windowHeight,
  calculateHours,
  getOpeningColours,
  showFromMarker,
  Banner,
  actionCount,
  updateActions,
} from '../functions';
import {Icons} from '../components';

export const ListingTile = ({
  listing,
  index,
  push = false,
  category = null,
}) => {
  const navigation = useNavigation();
  const [fromMarker] = useAtom(showFromMarker);
  const [, setActions] = useAtom(actionCount);
  const OpenIcon = Icons['open'];
  const NearerIcon = Icons['nearer'];
  const [hours, setHours] = useState(calculateHours(listing.open));
  const [keywords] = useState(() => {
    words = [];
    listing.categories.forEach(cat => words.push(cat.name));
    return words;
  });
  setInterval(() => {
    setHours(calculateHours(listing.open));
  }, 60000);

  return (
    <>
      <TouchableHighlight
        activeOpacity={0.7}
        underlayColor="#c2c2c2"
        onPress={() => {
          updateActions(setActions);
          push
            ? navigation.push('Listing', {listing: listing, category: category})
            : navigation.navigate('Listing', {
                listing: listing,
                category: category,
              });
        }}
        style={{
          paddingBottom: windowWidth * 0.03,
          paddingTop: windowWidth * 0.03,
          backgroundColor: '#fff',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              position: 'relative',
              flex: 1,
              width: windowWidth * 0.35,
              margin: windowWidth * 0.025,
              marginTop: 0,
              marginBottom: 0,
            }}>
            {listing.image ? (
              <Image
                source={{uri: listing.image}}
                style={{
                  height: windowHeight * 0.125,
                  width: windowWidth * 0.35,
                  borderBottomLeftRadius: 5,
                  borderBottomRightRadius: 5,
                  marginTop: 0,
                }}
              />
            ) : (
              <View
                style={{
                  backgroundColor: '#e1e1e1',
                  height: windowHeight * 0.125,
                  width: windowWidth * 0.35,
                  borderBottomLeftRadius: 5,
                  borderBottomRightRadius: 5,
                  marginTop: 0,
                }}>
                <NearerIcon />
              </View>
            )}
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                padding: 2,
                height: windowHeight * 0.03,
                width: windowHeight * 0.03,
                backgroundColor: getOpeningColours(hours),
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <OpenIcon />
            </View>
          </View>
          <View
            style={{
              margin: windowWidth * 0.025,
              marginTop: 0,
              width: windowWidth * 0.55,
            }}>
            <Text
              style={{
                color: '#1c1c1e',
                marginBottom: 5,
                fontSize: windowHeight * 0.025,
              }}>
              {listing.title}
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                marginBottom: 5,
              }}>
              {listing.categories.map(cat => (
                <Text
                  key={`Cat ID: ${cat.id}`}
                  style={{
                    padding: 3,
                    fontSize: windowHeight * 0.014,
                    marginRight: 2,
                    borderColor: '#cd3144',
                    borderWidth: 1,
                    borderRadius: 3,
                    textAlign: 'left',
                    color: '#1c1c1e',
                  }}>
                  {cat.name}
                </Text>
              ))}
            </View>
            <Text
              style={{
                fontSize: windowHeight * 0.014,
                color: '#1c1c1e',
                fontWeight: 'bold',
              }}>
              {Math.round(listing.distance * 100) / 100} miles from{' '}
              {fromMarker ? 'map marker' : 'me'}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
      {Number.isInteger(index / 4) && <Banner keywords={keywords} />}
    </>
  );
};
