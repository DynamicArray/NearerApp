import {useEffect} from 'react';
import {Alert, Linking, PermissionsAndroid, Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {useAtom} from 'jotai';
import {showFromMarker, userLocation} from '../functions';

const hasPermissionIOS = async () => {
  const status = await Geolocation.requestAuthorization('whenInUse');

  if (status === 'granted') {
    return true;
  }

  if (status === 'denied') {
    Alert.alert('Location permission denied');
  }

  if (status === 'disabled') {
    Alert.alert(
      `Turn on Location Services to allow Nearer to determine your location.`,
      '',
      [
        {text: 'Go to Settings', onPress: openSetting},
        {text: "Don't Use Location", onPress: () => {}},
      ],
    );
  }

  return false;
};

const hasLocationPermission = async () => {
  let hasPermission = false;
  if (Platform.OS === 'ios') {
    hasPermission = await hasPermissionIOS();
  } else if (Platform.OS === 'android') {
    if (Platform.Version < 23) {
      hasPermission = true;
    } else {
      hasPermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (!hasPermission) {
        let status = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (status === PermissionsAndroid.RESULTS.GRANTED) {
          hasPermission = true;
        } else {
          hasPermission = await PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
          );
          if (!hasPermission) {
            status = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
            );
            hasPermission = status === PermissionsAndroid.RESULTS.GRANTED;
          }
        }
      }
    }
  }
  return hasPermission;
};

const openSetting = () => {
  Linking.openSettings().catch(() => {
    Alert.alert('Unable to open settings');
  });
};

export const GeoLocate = () => {
  const [fromMarker] = useAtom(showFromMarker);
  const [, setLocation] = useAtom(userLocation);
  useEffect(() => {
    if (!fromMarker) {
      updateLocation(setLocation);
    }
  }, [fromMarker, setLocation]);
  return null;
};

export const updateLocation = async (setLocation, setRefreshing = false) => {
  const defaultLocation = {latitude: 51.509865, longitude: -0.118092};
  if (setRefreshing) {
    setRefreshing(true);
  }
  if (await hasLocationPermission()) {
    Geolocation.getCurrentPosition(
      position => {
        setLocation(position?.coords ? position.coords : defaultLocation);
        if (setRefreshing) {
          setRefreshing(false);
        }
      },
      error => {
        setLocation(defaultLocation);
        switch (error.code) {
          case 5:
            Alert.alert(
              `Turn on Location Services to allow Nearer to determine your location.`,
              '',
              [{text: 'Open settings', onPress: openSetting}],
            );
            break;
          default:
            console.log('Location Error: ', error);
            break;
        }
      },
      {
        accuracy: {android: 'high', ios: 'best'},
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 50,
        forceRequestLocation: true,
        forceLocationManager: false,
        showLocationDialog: false,
      },
    );
  } else {
    setLocation(defaultLocation);
  }
};
