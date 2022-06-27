import {Animated, Easing} from 'react-native';

export const calculateHours = hours => {
  const now = new Date();
  const monday = getMonday();
  const UTCNow = parseInt(
    (now.getTime() - now.getTimezoneOffset() * 60000) / 1000,
  );
  let state = hours.length > 0 ? 'Closed' : 'No Data';

  if (state === 'Closed') {
    for (let i = 0; i < hours.length; i = i + 2) {
      let opens = hours[i];
      let closes = hours[i + 1];
      if (closes === opens) closes += 86400;

      opens += monday;
      closes += monday;

      if (UTCNow >= opens && UTCNow <= closes) {
        if (
          closes - UTCNow > 0 &&
          closes - UTCNow < 1800 &&
          hours[i + 1] !== hours[i + 2]
        ) {
          state = 'Closing Soon';
        } else {
          state = 'Open';
        }
      } else if (opens - UTCNow > 0 && opens - UTCNow < 1800) {
        state = 'Opening Soon';
      }
    }
  }
  return state;
};

const getMonday = () => {
  let d = new Date();
  d.setHours(0);
  d.setMinutes(0);
  d.setSeconds(0);
  d.setMilliseconds(0);

  return (
    (d.getTime() -
      (d.getDay() === 0 ? 6 : d.getDay() - 1) * 24 * 60 * 60 * 1000 -
      d.getTimezoneOffset() * 60000) /
    1000
  );
};

export const getOpeningColours = hour => {
  let colour = '';
  switch (hour) {
    case 'Open':
      colour = '#46a552';
      break;
    case 'Closed':
      colour = '#cd3144';
      break;
    case 'Opening Soon':
    case 'Closing Soon':
      colour = '#d8b328';
      break;
    case 'No Data':
    default:
      colour = '#a9a9a9';
      break;
  }
  return colour;
};

export const arrayToggle = (array, value) => {
  if (value !== null) {
    const valueIndex = parseInt(array.findIndex(el => el.id === value.id));
    if (valueIndex !== -1) {
      array.splice(valueIndex, 1);
    } else {
      array.push({id: value.id, name: value.name});
    }
  }
  return array;
};

export const toggleListItem = (open, setOpen, animatedController) => {
  if (open) {
    Animated.timing(animatedController, {
      duration: 1000,
      toValue: 0,
      easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      useNativeDriver: false,
    }).start();
  } else {
    Animated.timing(animatedController, {
      duration: 1000,
      toValue: 1,
      easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      useNativeDriver: false,
    }).start();
  }
  setOpen(!open);
};
