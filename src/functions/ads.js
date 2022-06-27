import {Platform} from 'react-native';
import mobileAds, {
  AppOpenAd,
  TestIds,
  InterstitialAd,
  MaxAdContentRating,
} from 'react-native-google-mobile-ads';

export const bannerUnitId = () => {
  let id = '';
  if (__DEV__) {
    id = TestIds.APP_OPEN;
  } else if (Platform.OS === 'ios') {
    id = 'ca-app-pub-0830035448849994/5133040397';
  } else if (Platform.OS === 'android') {
    id = 'ca-app-pub-0830035448849994/9465121358';
  }
  return id;
};

const interstitualUnitId = () => {
  let id = '';
  if (__DEV__) {
    id = TestIds.APP_OPEN;
  } else if (Platform.OS === 'ios') {
    id = 'ca-app-pub-0830035448849994/5222624014';
  } else if (Platform.OS === 'android') {
    id = 'ca-app-pub-0830035448849994/8259850892';
  }
  return id;
};

export const initAds = () => {
  mobileAds().initialize();
};

export const openUnitId = () => {
  let id = '';
  if (__DEV__) {
    id = TestIds.APP_OPEN;
  } else if (Platform.OS === 'ios') {
    id = 'ca-app-pub-0830035448849994/2506877051';
  } else if (Platform.OS === 'android') {
    id = 'ca-app-pub-0830035448849994/5899327158';
  }
  return id;
};

export const interstitial = (keywords = []) =>
  InterstitialAd.createForAdRequest(interstitualUnitId(), {
    requestNonPersonalizedAdsOnly: true,
    keywords: keywords,
  });

export const appOpenAd = AppOpenAd.createForAdRequest(openUnitId(), {
  requestNonPersonalizedAdsOnly: false,
});
