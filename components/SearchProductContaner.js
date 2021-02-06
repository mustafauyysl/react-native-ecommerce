import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

class SearchProductContainer extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        activeOpacity={0.8}
        style={styles.container}>
        <Image
          style={styles.img}
          resizeMode="stretch"
          source={{uri: this.props.img}}
        />
        <View style={styles.description}>
          <Text style={styles.name}>{this.props.name}</Text>
          <Text style={styles.price}>${this.props.price}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 15,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  description: {
    marginHorizontal: 10,
  },
  name: {
    fontFamily: 'Dosis-Regular',
    marginBottom: 10,
  },
  price: {
    fontFamily: 'Dosis-Bold',
    fontSize: 16,
  },
});

export default SearchProductContainer;
