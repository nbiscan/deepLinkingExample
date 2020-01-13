import {createStackNavigator} from 'react-navigation-stack';
import Deepest from './Deepest';

export default createStackNavigator({
  Deepest: {
    screen: Deepest,
    path: 'deepest',
  },
});
