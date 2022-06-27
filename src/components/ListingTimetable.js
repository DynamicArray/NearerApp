import React from 'react';
import {View, Text} from 'react-native';
import {windowWidth} from '../functions';

export const ListingTimetable = ({hours}) => {
  const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  return (
    <View style={{flex: 1, margin: 15}}>
      {weekdays.map(day =>
        hours[day] ? (
          <View
            key={day}
            style={{
              borderWidth: 1,
              borderColor: '#c7c7cc',
              width: windowWidth * 0.8,
              marginLeft: 15,
              flex: 1,
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{textAlign: 'center', padding: 10, color: '#1c1c1e'}}>
              {day}
            </Text>
            <Text style={{textAlign: 'center', padding: 10, color: '#1c1c1e'}}>
              {hours[day][0].open} - {hours[day][0].close}
            </Text>
          </View>
        ) : null,
      )}
    </View>
  );
};
