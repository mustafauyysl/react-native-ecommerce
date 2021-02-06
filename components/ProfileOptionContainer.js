import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

class ProfileOptionContainer extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        activeOpacity={0.8}
        style={styles.container}>
        <Text style={styles.text}>{this.props.text}</Text>
        <Icon name="chevron-right" />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: 'gray',
    fontFamily: 'Dosis-Regular',
    fontSize: 18,
  },
});

export default ProfileOptionContainer;
