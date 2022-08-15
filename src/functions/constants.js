import {Dimensions} from 'react-native';

export const style = {
  colours: {
    primary: '#cd3144',
    background: '#cd3144',
    card: '#fff',
    text: '#1c1c1e',
    border: '#c7c7c7',
    notification: '#cd3144',
  },
};

export const inputStyle = {
  width: '90%',
  marginLeft: '5%',
  height: 40,
  borderColor: '#c7c7c7',
  color: '#1c1c1e',
  borderWidth: 1,
  marginTop: 10,
  marginBottom: 10,
  padding: 10,
  borderRadius: 5,
};

export const tabOptions = {
  tabBarStyle: {
    backgroundColor: style.colours.card,
    height: '10%',
    width: '100%',
  },
  headerStyle: {
    backgroundColor: style.colours.primary,
  },
  headerTintColor: style.colours.card,
  headerShown: false,
  headerTitleAlign: 'center',
  tabBarShowLabel: false,
  tabBarActiveBackgroundColor: style.colours.card,
  tabBarInactiveBackgroundColor: style.colours.card,
  tabBarActiveTintColor: style.colours.primary,
  tabBarInactiveTintColor: style.colours.text,
};

export const stackOptions = {
  headerStyle: {backgroundColor: style.colours.primary},
  headerTitleAlign: 'center',
  headerTintColor: style.colours.card,
};

export const topTabOptions = {
  tabBarIndicatorStyle: {
    backgroundColor: '#fff',
  },
  tabBarActiveTintColor: '#fff',
  tabBarInactiveTintColor: '#fff',
  tabBarStyle: {
    backgroundColor: '#cd3144',
  },
  tabBarScrollEnabled: true,
};

export const checkboxStyle = (active = null) => {
  return {
    margin: windowWidth * 0.01,
    paddingLeft: windowWidth * 0.125,
    paddingRight: windowWidth * 0.125,
    flexDirection: 'row',
    alignItems: 'center',
    color: active ? '#cd3144' : 'black',
    marginLeft: active ? windowWidth * 0.05 : 0,
    marginRight: active ? windowWidth * 0.05 : 0,
    width: active ? windowWidth * 0.7 : null,
  };
};

export const windowWidth = Dimensions.get('window').width;

export const windowHeight = Dimensions.get('window').height;
