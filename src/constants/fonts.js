import { Platform } from 'react-native';

const bold = Platform.select({
  android: 'sans-serif-condensed',
  ios: 'HelveticaNeue-Bold',
  web: 'Roboto'
});

const light = Platform.select({
  android: 'sans-serif-light',
  ios: 'HelveticaNeue-Light',
  web: 'Roboto'
});

const medium = Platform.select({
  android: 'sans-serif-medium',
  ios: 'HelveticaNeue-Medium',
  web: 'Roboto'
});

const regular = Platform.select({
  android: 'sans-serif',
  ios: 'HelveticaNeue',
  web: 'Roboto'
});

export default {
  bold,
  light,
  medium,
  regular
};
