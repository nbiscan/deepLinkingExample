import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Login from './Login';
import Home from './Home';

const rootNavi = createSwitchNavigator(
  {
    Login: {
      screen: Login,
    },
    Home: {
      screen: Home,
      path: 'home',
    },
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(rootNavi);
