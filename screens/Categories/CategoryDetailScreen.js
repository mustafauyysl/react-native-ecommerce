import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import Header from '../../components/Header';
import ProductContainer from '../../components/ProductContainer';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productsActions from '../../redux/actions/products';
import ProductDetailScreen from '../Home/ProductDetailScreen';

class CategoryDetailScreen extends Component {
  showProductDetail = (item) => {
    this.props.actions.selectProduct(item);
    this.props.actions.showProductDetail(true);
  };

  renderItem = (item) => {
    return (
      <ProductContainer
        productName={item.name}
        productPrice={item.price}
        productImg={item.img}
        onPress={() => this.showProductDetail(item)}
      />
    );
  };

  render() {
    return (
      <View>
        <Header
          title="Mershka"
          leftButtonIcon="chevron-left"
          leftButtonPress={() => this.props.navigation.goBack()}
        />
        <FlatList
          numColumns={2}
          data={this.props.products}
          keyExtractor={(item) => item.id}
          renderItem={(item) => this.renderItem(item.item)}
        />
        <ProductDetailScreen />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.selectCategoryReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      selectProduct: bindActionCreators(
        productsActions.selectProduct,
        dispatch,
      ),
      showProductDetail: bindActionCreators(
        productsActions.showProductDetail,
        dispatch,
      ),
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryDetailScreen);
