import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

class CategoryContainer extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        activeOpacity={0.8}
        style={[
          styles.container,
          ,
          {alignItems: this.props.align % 2 == 0 ? 'flex-end' : 'flex-start'},
        ]}>
        <Text style={styles.title}>{this.props.name}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    margin: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    justifyContent: 'center',
    padding: 25,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Dosis',
  },
});

export default CategoryContainer;
