import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

class Input extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder={this.props.placeholder} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
});
export default Input;
