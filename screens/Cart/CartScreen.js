import React, {Component} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import CartContainer from '../../components/CartContainer';
import Header from '../../components/Header';
import Button from '../../components/Button';
import {connect} from 'react-redux';
import Colors from '../../constants/colors';
import * as cartActions from '../../redux/actions/cart';
import {bindActionCreators} from 'redux';

class CartScreen extends Component {
  renderItem = (item) => {
    const {addToCart, removeFromCart, decreaseByOne} = this.props.actions;
    return (
      <CartContainer
        name={item.product.name}
        price={item.product.price}
        img={item.product.img}
        amount={item.quantity}
        plusPress={() => addToCart({quantity: 1, product: item.product})}
        minusPress={() => decreaseByOne({quantity: 1, product: item.product})}
        removeFromCartPress={() => removeFromCart(item.product)}
      />
    );
  };

  calculateTotalPrice = () => {
    let total = 0;
    this.props.cart.map((x) => {
      total += x.quantity * x.product.price;
    });
    return total;
  };

  renderEmpty = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>Cart is empty...</Text>
      </View>
    );
  };

  renderCart = () => {
    return (
      <View style={styles.cartContainer}>
        <View style={styles.list}>
          <FlatList
            keyExtractor={(item) => item.id}
            data={this.props.cart}
            renderItem={(item) => this.renderItem(item.item)}
          />
          <View style={styles.totalPriceContainer}>
            <Text style={styles.totalPrice}>Total Price: </Text>
            <Text style={styles.totalPriceAmount}>
              ${this.calculateTotalPrice()}.00
            </Text>
          </View>
        </View>

        <View style={styles.footerContainer}>
          <Button title="Complete" />
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          title="Cart"
          leftButtonIcon="chevron-left"
          leftButtonPress={() => this.props.navigation.goBack()}
        />
        {this.props.cart.length > 0 ? this.renderCart() : this.renderEmpty()}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
      decreaseByOne: bindActionCreators(cartActions.decreaseByOne, dispatch),
    },
  };
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  list: {
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  totalPriceContainer: {
    margin: 15,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 15,
  },
  totalPrice: {
    fontFamily: 'Dosis-Bold',
    fontSize: 18,
  },
  totalPriceAmount: {
    fontFamily: 'Dosis-Bold',
    fontSize: 18,
    color: Colors.primaryColor,
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  emptyTitle: {
    fontFamily: 'Dosis-Bold',
    fontSize: 20,
  },
  cartContainer: {
    height: '90%',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
