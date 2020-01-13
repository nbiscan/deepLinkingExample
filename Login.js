import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import NavigationService from './NavigationService';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  onChangeEmail(email) {
    this.setState({
      email,
    });
  }

  onChangePassword(password) {
    this.setState({
      password,
    });
  }

  render() {
    const {email, password} = this.state;
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <View style={styles.background} />
        <View style={styles.container}>
          <TextInput
            style={styles.email}
            placeholder="email"
            autoCompleteType="email"
            keyboardType="email-address"
            onChangeText={text => this.onChangeEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.email}
            placeholder="password"
            autoCompleteType="password"
            secureTextEntry={true}
            textContentType="password"
            onChangeText={text => this.onChangePassword(text)}
            value={password}
          />
          <TouchableOpacity
            onPress={() => NavigationService.navigate('Home')}
            style={styles.btn}>
            <Text style={styles.title}>Login</Text>
          </TouchableOpacity>
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
    height: '20%',
    zIndex: 1,
  },
  title: {
    fontFamily: 'Verdana',
    color: '#0f293b',
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

export default Login;
