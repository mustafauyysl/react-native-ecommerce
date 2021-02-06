import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import Colors from '../constants/colors';
import {connect} from 'react-redux';

class Header extends Component {
  calculateCartLength = () => {
    var total = 0;
    this.props.cart.map((x) => (total += x.quantity));
    return total;
  };

  leftButton = () => {
    return (
      <TouchableHighlight
        underlayColor="transparent"
        style={styles.iconContainer}
        onPress={this.props.leftButtonPress}>
        <Icon name={this.props.leftButtonIcon} size={25} />
      </TouchableHighlight>
    );
  };

  rightButton = () => {
    return (
      <TouchableHighlight
        underlayColor="transparent"
        style={styles.iconContainer}
        onPress={this.props.rightButtonPress}>
        <View>
          <View style={styles.badgeIconView}>
            {this.props.cart.length > 0 && this.props.rightButtonIcon ? (
              <View>
                <View style={styles.badgeContainer}>
                  <Text style={styles.badge} numberOfLines={1}>
                    {this.calculateCartLength()}
                  </Text>
                </View>
                <Icon name={this.props.rightButtonIcon} size={25} />
              </View>
            ) : null}
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.leftButton()}
        <View>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
        {this.rightButton()}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    zIndex: 1,
    backgroundColor: '#fff',
    paddingBottom: -20,
  },
  iconContainer: {
    marginHorizontal: 15,
    width: '10%',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Dosis-Regular',
    alignSelf: 'center',
  },
  badgeIconView: {
    position: 'relative',
    padding: 5,
  },
  badgeContainer: {
    color: '#fff',
    position: 'absolute',
    zIndex: 10,
    top: -8,
    right: -3,
    padding: 2,
    backgroundColor: Colors.primaryColor,
    borderRadius: 15,
  },
  badge: {
    color: '#fff',
    marginHorizontal: 3,
  },
});

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

export default connect(mapStateToProps)(Header);
