import React, {Component} from 'react';
import {View, StatusBar, StyleSheet, Text} from 'react-native';

class Deepest extends Component {
  static navigationOptions = {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#f76c57',
    },
  };

  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <View style={styles.background} />
        <View style={styles.container}>
          <Text style={styles.title}>Deepest level</Text>
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
    height: '10%',
    zIndex: 1,
  },
  title: {
    marginTop: 200,
    fontFamily: 'Verdana',
    fontSize: 40,
    color: 'white',
  },
  email: {
    backgroundColor: 'white',
    padding: 10,
    height: 50,
    width: '100%',
    marginBottom: 10,
    borderRadius: 40,
  },
  btn: {
    width: 100,
    height: 50,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f76c57',
  },
});

export default Deepest;
