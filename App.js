import React, {Component} from 'react';
import AppNavigator from './AppNavigator';
import NavigationService from './NavigationService';
import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings(['']);

class App extends Component {
  render() {
    return (
      <AppNavigator
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
        uriPrefix={'demo://'}
      />
    );
  }
}

export default App;
