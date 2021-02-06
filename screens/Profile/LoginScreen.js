import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

class LoginScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          title="Login"
          leftButtonIcon="chevron-left"
          leftButtonPress={() => this.props.navigation.goBack()}
        />
        <View style={styles.container}>
          <Text style={styles.title}>Mershka.</Text>
          <View style={styles.inputContainer}>
            <Input placeholder="Username or Email" />
            <Input placeholder="Password" />
            <Button style={styles.button} title="LOGIN" />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontFamily: 'Dosis-Bold',
    fontSize: 50,
    marginBottom: 50,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  inputContainer: {
    width: '80%',
  },
  button: {
    borderRadius: 20,
    marginTop: 25,
  },
});
export default LoginScreen;
