import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();

class ProductContainer extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={styles.container}
        activeOpacity={0.8}>
        <Image
          style={styles.img}
          resizeMode="stretch"
          source={{uri: this.props.productImg}}
        />
        <Text style={styles.productName}>{this.props.productName}</Text>
        <Text style={styles.productPrice}>${this.props.productPrice}</Text>
        {this.props.checkLiked ? (
          <TouchableOpacity
            style={styles.heartButton}
            onPress={this.props.dislikePress}>
            <Icon name="heart" size={20} color="#CC3D5C" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.heartButton}
            onPress={this.props.likePress}>
            <Icon name="heart-outline" size={20} />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    width: '50%',
  },
  img: {
    width: '100%',
    height: 240,
  },
  productName: {
    margin: 5,
    fontFamily: 'Dosis-regular',
    fontSize: 16,
  },
  productPrice: {
    marginVertical: 2,
    marginHorizontal: 5,
    fontWeight: '300',
    fontFamily: 'Dosis-Regular',
    fontSize: 17,
  },
  heartButton: {
    position: 'absolute',
    right: 5,
    top: 5,
  },
});

export default ProductContainer;
