import React, {Component} from 'react';
import {View, StatusBar, StyleSheet, Text} from 'react-native';

class Second extends Component {
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
          <Text style={styles.title}>Second level</Text>
          {navigation.state.params && (
            <Text style={styles.subtitle}>
              Param passed in DL: {navigation.state.params.secondId}
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

export default Second;
