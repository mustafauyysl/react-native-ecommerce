import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../constants/colors';

class Button extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        activeOpacity={0.8}
        style={[styles.container, this.props.style]}>
        <Text style={styles.buttonTitle}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: 50,
  },
  buttonTitle: {
    color: '#fff',
    fontWeight: '800',
    fontFamily: 'Dosis-Regular',
    fontSize: 20,
    marginBottom: 2,
  },
});

export default Button;
