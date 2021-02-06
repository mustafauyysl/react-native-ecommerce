import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();

class WishlistContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          resizeMode="stretch"
          style={styles.img}
          source={{uri: this.props.img}}
        />
        <View style={styles.description}>
          <Text style={styles.name}>{this.props.name}</Text>
          <Text style={styles.price}>${this.props.price}</Text>
        </View>
        <TouchableOpacity onPress={this.props.dislikePress}>
          <Icon name="heart" size={18} color="#CC3D5C" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    marginHorizontal: 15,
    marginTop: 15,
    padding: 15,
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 15,
  },
  description: {
    width: '70%',
    marginLeft: 15,
  },
  name: {
    fontFamily: 'Dosis-Regular',
  },
  price: {
    fontFamily: 'Dosis-Bold',
    fontSize: 16,
    marginTop: 5,
  },
});

export default WishlistContainer;
