import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getListings = async (
  setter,
  location,
  showOpen = false,
  limit = 10,
  categories = null,
) => {
  if (location?.latitude && location?.longitude) {
    await restFetch(
      'listings',
      'POST',
      {},
      {
        lat: location.latitude,
        lon: location.longitude,
        distance: 15,
        limit: limit,
        cats: categories,
        open: showOpen,
      },
    ).then(result => {
      setter(result.result);
    });
  }
};

export const getNearerCategories = async setter => {
  await restFetch('get-app-categories').then(result =>
    setter(result.categories ?? []),
  );
};

const restFetch = async (
  endpoint,
  method = 'POST',
  headers = {},
  body = null,
  route = 'nearer/v1',
) => {
  headers = Object.assign({
    Accept: 'application/json',
    'Content-Type': 'application/json',
  });
  const response = await fetch(
    `https://api.nearer.com/wp-json/${route}/${endpoint}`,
    {
      method: method,
      headers: headers,
      body: body ? JSON.stringify(body) : null,
    },
  );
  return response.json();
};

export const getUserCategories = async setter => {
  await AsyncStorage.getItem('feed_chosen_categories').then(categories =>
    setter(categories ? JSON.parse(categories) : []),
  );
};
