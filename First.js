import React, {Component} from 'react';
import {View, StatusBar, StyleSheet, Text} from 'react-native';

class First extends Component {
  static navigationOptions = {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#f76c57',
    },
  };

  render() {
    const {navigation} = this.props;

    return (
      <View>
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>
          <Text style={styles.title}>First level</Text>
          {navigation.state.params && (
            <Text style={styles.subtitle}>
              Params passed in DL: {navigation.state.params.firstId}
            </Text>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    alignItems: 'center',
    backgroundColor: '#0f293b',
    height: '100%',
    padding: 30,
  },
  background: {
    backgroundColor: '#f76c57',
    height: '5%',
    zIndex: 1,
  },
  title: {
    marginTop: 200,
    fontFamily: 'Verdana',
    fontSize: 40,
    color: 'white',
  },
  subtitle: {
    marginTop: 10,
    fontFamily: 'Verdana',
    fontSize: 20,
    color: 'white',
  },
});

export default First;
