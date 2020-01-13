import {createStackNavigator} from 'react-navigation-stack';
import First from './First';
import Second from './Second';
import Third from './Third';

export default createStackNavigator(
  {
    First: {
      screen: First,
      path: 'first/:firstId',
    },
    Second: {screen: Second, path: 'second/:secondId'},
    Third: {screen: Third, path: 'third'},
  },
  {
    initialRouteName: 'First',
  },
);
