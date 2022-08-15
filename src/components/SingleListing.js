import React, {useState, useEffect} from 'react';
import {Text, View, Image, Linking, ScrollView} from 'react-native';
import {
  windowWidth,
  calculateHours,
  getOpeningColours,
  Banner,
} from '../functions';
import {Icons, ListingTimetable, CategoryLink} from '../components';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const SingleListing = ({route, navigation}) => {
  const [listing] = useState(route.params.listing);
  const OpenIcon = Icons['open'];
  const AddressIcon = Icons['location'];
  const PhoneIcon = Icons['phone'];
  const SiteIcon = Icons['website'];
  const NearerIcon = Icons['nearer'];
  const MapIcon = Icons['map'];
  const [hours, setHours] = useState(calculateHours(listing.open));
  const [keywords] = useState(() => {
    words = [];
    listing.categories.forEach(cat => words.push(cat.name));
    return words;
  });

  setInterval(() => {
    setHours(calculateHours(listing.open));
  }, 60000);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: listing.title,
    });
  }, [navigation, listing]);
  return (
    <ScrollView style={{flex: 1}}>
      <View
        style={{
          position: 'relative',
          width: windowWidth,
        }}>
        {listing.image ? (
          <Image
            source={{uri: listing.image}}
            style={{
              height: 200,
              width: windowWidth,
            }}
          />
        ) : (
          <View
            style={{
              backgroundColor: '#e1e1e1',
              height: 200,
              width: windowWidth,
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
            padding: 3,
            height: 45,
            width: 45,
            backgroundColor: getOpeningColours(hours),
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <OpenIcon />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          marginLeft: 15,
          marginRight: 15,
          marginTop: 10,
          width: windowWidth,
        }}>
        {listing.categories.map(cat => {
          return (
            <CategoryLink
              key={`Single Categories:${cat.term_id}`}
              category={cat}
              push={parseInt(cat.term_id) !== parseInt(route.params.category)}
            />
          );
        })}
      </View>
      <View
        style={{
          width: windowWidth * 0.6,
          padding: 15,
        }}>
        {listing.address ? (
          <>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignContent: 'center',
                marginBottom: 15,
              }}>
              <View style={{height: 25, width: 25}}>
                <AddressIcon />
              </View>
              <Text style={{color: '#1c1c1e'}}>{listing.address}</Text>
            </View>
            <TouchableOpacity
              style={{
                marginBottom: 15,
                backgroundColor: '#0078a8',
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: 150,
                borderRadius: 2,
                padding: 5,
              }}
              onPress={() => {
                console.log('Press');
                Linking.openURL(
                  `https://www.google.com/maps/dir/?api=1&destination=${encodeURI(
                    listing.address,
                  )}`,
                );
              }}>
              <MapIcon color="#fff" height={20} width={20} />
              <Text style={{color: '#fff'}}>Get Directions</Text>
            </TouchableOpacity>
          </>
        ) : null}
        {listing.phone ? (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignContent: 'center',
              width: windowWidth * 0.9,
              marginBottom: 15,
            }}>
            <View style={{height: 25, width: 25}}>
              <PhoneIcon />
            </View>
            <Text
              style={{color: '#cd3144'}}
              onPress={() => Linking.openURL(`tel:${listing.phone}`)}>
              {listing.phone}
            </Text>
          </View>
        ) : null}
        {listing.website ? (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignContent: 'center',
              width: windowWidth * 0.9,
            }}>
            <View style={{height: 25, width: 25}}>
              <SiteIcon />
            </View>
            <Text
              style={{color: '#cd3144'}}
              onPress={() => Linking.openURL(listing.website)}>
              {listing.website}
            </Text>
          </View>
        ) : null}
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          marginLeft: 15,
          marginRight: 15,
          marginBottom: 15,
          width: windowWidth,
        }}>
        {listing.features
          ? listing.features.map(cat => (
              <CategoryLink
                key={`Single Features:${cat.term_id}`}
                style={{
                  padding: 3,
                  fontSize: 11,
                  margin: 2,
                  borderColor: '#d1d1d1',
                  color: '#60a25b',
                  borderWidth: 1,
                  borderRadius: 3,
                  textAlign: 'left',
                }}
                category={cat}
                push={parseInt(cat.term_id) !== parseInt(route.params.category)}
              />
            ))
          : null}
      </View>
      <Banner keywords={keywords} />
      <Text
        style={{
          fontSize: 13,
          width: windowWidth * 0.8,
          marginLeft: 15,
          marginRight: windowWidth * 0.1,
          color: '#1c1c1e',
        }}>
        {listing.content}
      </Text>
      <ListingTimetable hours={listing.business_hours} />
    </ScrollView>
  );
};
