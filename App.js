import React, {Component} from 'react';
import AppNavigator from './AppNavigator';
import NavigationService from './NavigationService';

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
