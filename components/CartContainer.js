import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

class CartContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.removeFromCartPress}>
          <Icon
            style={styles.minusIcon}
            name="minus-circle"
            size={18}
            color="#800000"
          />
        </TouchableOpacity>
        <Image style={styles.img} source={{uri: this.props.img}} />
        <View style={styles.description}>
          <Text style={styles.name}>{this.props.name}</Text>
          <Text style={styles.price}>${this.props.price}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.props.plusPress}>
            <Icon style={styles.icon} name="plus" size={16} />
          </TouchableOpacity>
          <Text>{this.props.amount}</Text>
          <TouchableOpacity onPress={this.props.minusPress}>
            <Icon style={styles.icon} name="minus" size={16} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  icon: {
    marginVertical: 7,
  },
  minusIcon: {
    marginRight: 10,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E9E9E9',
    padding: 5,
    borderRadius: 15,
    marginLeft: 20,
  },
  description: {
    marginLeft: 15,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  name: {
    fontFamily: 'Dosis-Regular',
  },
  price: {
    fontFamily: 'Dosis-Bold',
  },
});

export default CartContainer;
