import React, {useEffect} from 'react';
import {Text, ScrollView, Linking, View} from 'react-native';
import {Icons} from '../components';
import {getOpeningColours} from '../functions';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const Help = ({navigation}) => {
  const IconEmail = Icons['email'];
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'About Nearer',
      headerShown: true,
    });
  }, [navigation]);
  return (
    <ScrollView style={{width: '90%', marginLeft: '5%', marginTop: 20}}>
      <Text style={{fontWeight: 'bold', marginBottom: 10, color: '#1c1c1e'}}>
        Legend
      </Text>
      <View style={{flex: 1, marginBottom: 25, color: '#1c1c1e'}}>
        <LegendItem label="Open" />
        <LegendItem
          label="Opening / Closing within 30 minutes"
          hours="Opening Soon"
        />
        <LegendItem label="Closed" />
        <LegendItem label="No Data" />
      </View>
      <Text style={{fontWeight: 'bold', marginBottom: 10, color: '#1c1c1e'}}>
        About
      </Text>
      <TouchableOpacity
        style={{
          padding: 5,
          marginBottom: 5,
          color: '#cd3144',
          backgroundColor: '#46a552',
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: 150,
          borderRadius: 2,
        }}
        onPress={() => Linking.openURL('https://nearer.com/contact-us')}>
        <IconEmail />
        <Text style={{color: '#fff'}}>Send Us Feedback</Text>
      </TouchableOpacity>
      <Text style={{marginBottom: 25, color: '#1c1c1e'}}>
        nearer.com was created by two of the founders of{' '}
        <Text
          style={{marginBottom: 5, color: '#cd3144'}}
          onPress={() => Linking.openURL('https://www.localdatacompany.com/')}>
          The Local Data Company
        </Text>{' '}
        which, with its legion of researchers daily visiting the UK high street,
        has become the de facto source of information on the United Kingdom
        retail landscape over the last 15 years. See{' '}
        <Text
          style={{marginBottom: 5, color: '#cd3144'}}
          onPress={() =>
            Linking.openURL(
              'https://www.localdatacompany.com/retail-and-leisure-location-data',
            )
          }>
          here
        </Text>{' '}
        how they do it (and see{' '}
        <Text
          style={{marginBottom: 5, color: '#cd3144'}}
          onPress={() =>
            Linking.openURL('https://www.localdatacompany.com/blog')
          }>
          here
        </Text>{' '}
        for their news on how the UK retail sector is faring post- Coronavirus).
        Like you, we've tried using other local directories and, all too often,
        have felt there's something missing and/or wrong. Independent surveys
        show that the most popular local search sites are, on average, missing
        more than 40% of local businesses - and this is before testing whether
        the information they do provide is correct. And then there's the issue
        of general trustworthiness. We've all read about fake reviews and sites
        that coerce businesses into paying to make negative reviews disappear.
        No thanks! Not to mention the fact that when you are looking for
        something on your phone, local search really means hyperlocal - what's
        right where you are. We thought about all of the things that we would
        want in our ideal local search site; and this is where we will create
        it: nearer.com: a fresh and efficient way for people to find
        street-fronted businesses and personally relevant promotions. All in one
        place. Local search is going hyperlocal. This site as you see it now is
        just a start. Please enjoy it - and watch this space.
      </Text>
      <Text style={{marginBottom: 5, color: '#cd3144'}}>
        * Note: Owing to temporary closures normal business hours as displayed
        in this app may not accurately reflect current opening times.
      </Text>
      <Text
        style={{marginBottom: 5, color: '#cd3144'}}
        onPress={() => Linking.openURL('https://nearer.com')}>
        https://nearer.com
      </Text>
      <Text style={{marginBottom: 5, color: '#1c1c1e'}}>Nearer Ltd.</Text>
      <Text style={{marginBottom: 5, color: '#1c1c1e'}}>
        20-22 Wenlock Road, London, England, N1 7GU
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 5,
          color: '#1c1c1e',
        }}>
        Publishing
      </Text>
      <Text style={{marginBottom: 5, marginTop: 5, color: '#1c1c1e'}}>
        App Version 1.0.9
      </Text>
    </ScrollView>
  );
};

const LegendItem = ({label, hours = null}) => {
  const OpenIcon = Icons['open'];
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        color: '#1c1c1e',
      }}>
      <View
        style={{
          padding: 2,
          height: 25,
          width: 25,
          backgroundColor: getOpeningColours(hours ?? label),
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 10,
        }}>
        <OpenIcon />
      </View>
      <Text
        style={{
          color: '#1c1c1e',
        }}>
        {label}
      </Text>
    </View>
  );
};
