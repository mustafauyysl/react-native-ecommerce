import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import ProductContainer from '../../components/ProductContainer';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productsActions from '../../redux/actions/products';
import * as wishlistActions from '../../redux/actions/wishlist';
import Header from '../../components/Header';
import Alert from '../../components/Alert';
import ProductDetailScreen from './ProductDetailScreen';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    showAlert = new Alert();
  }

  componentDidMount() {
    this.props.actions.getProducts();
  }

  showProductDetail = (item) => {
    this.props.actions.selectProduct(item);
    this.props.actions.showProductDetail(true);
  };

  renderItem = (item) => {
    let checkLiked = false;
    this.props.wishlist.map((x) => {
      if (x.id == item.id) {
        checkLiked = true;
      }
    });
    return (
      <ProductContainer
        productName={item.name}
        productPrice={item.price}
        productImg={item.img}
        onPress={() => this.showProductDetail(item)}
        likePress={() => this.props.actions.addToWishlist(item)}
        dislikePress={() => this.props.actions.removeFromWishlist(item)}
        checkLiked={checkLiked}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          title="Mershka"
          rightButtonIcon="shopping-cart"
          rightButtonPress={() => this.props.navigation.navigate('Cart')}
          cart={3}
        />
        <FlatList
          style={styles.list}
          renderItem={(item) => this.renderItem(item.item)}
          data={this.props.products}
          numColumns={2}
        />
        <ProductDetailScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  list: {
    width: '100%',
    height: '100%',
  },
});

function mapStateToProps(state) {
  return {
    products: state.productsListReducer,
    showProductDetail: state.showProductDetailReducer,
    cart: state.cartReducer,
    wishlist: state.wishlistReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productsActions.getProducts, dispatch),
      showProductDetail: bindActionCreators(
        productsActions.showProductDetail,
        dispatch,
      ),
      selectProduct: bindActionCreators(
        productsActions.selectProduct,
        dispatch,
      ),
      addToWishlist: bindActionCreators(
        wishlistActions.addToWishlist,
        dispatch,
      ),
      removeFromWishlist: bindActionCreators(
        wishlistActions.removeFromWishlist,
        dispatch,
      ),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
