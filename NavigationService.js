import {NavigationActions, StackActions} from 'react-navigation';

let navigator;

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

function reset(routeName) {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({routeName})],
  });

  navigator.dispatch(resetAction);
}

function navigateLastScreen() {
  const popAction = StackActions.pop({
    n: 1,
  });
  navigator.dispatch(popAction);
}

// add other navigation functions that you need and export them

export default {
  navigate,
  reset,
  navigateLastScreen,
  setTopLevelNavigator,
};
