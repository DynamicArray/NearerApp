import {Platform} from 'react-native';
import {atom} from 'jotai';
import {arrayToggle, interstitial} from '../functions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getTrackingStatus} from 'react-native-tracking-transparency';

export const showFromMarker = atom(false);

export const nearerCategories = atom(null);

export const markerLocation = atom(null);

export const userLocation = atom(null);

export const showOnlyOpen = atom(false);

export const savedCategories = atom(null);

export const actionCount = atom(0);

export const trackingAtom = atom(allowTracking);

export const updateActions = setter => {
  setter(count => {
    if (count < 5) {
      count++;
    } else {
      count = 0;
      interstitial().show();
    }
    return count;
  });
};

export const updateCategories = (value, categories, setter) => {
  const newCategories = arrayToggle([...categories], value);
  setter(newCategories);
  storeCategories(newCategories);
};

const storeCategories = async categories => {
  await AsyncStorage.setItem(
    'feed_chosen_categories',
    categories ? JSON.stringify(categories) : JSON.stringify([]),
  );
};

const allowTracking = async () => {
  let status = false;
  if (Platform.OS === 'ios') {
    const trackingStatus = await getTrackingStatus();
    status =
      trackingStatus === 'authorized' || trackingStatus === 'unavailable';
  }
  return status;
};
