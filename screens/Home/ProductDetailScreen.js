import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Animated,
  Modal,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from '../../redux/actions/cart';
import * as productsActions from '../../redux/actions/products';
import Header from '../../components/Header';
import Button from '../../components/Button';
import SizesContainer from '../../components/SizesContainer';
import Alert from '../../components/Alert';

class ProductDetailScreen extends Component {
  state = {
    animation: new Animated.Value(0),
  };

  showModal = () => {
    Animated.spring(this.state.animation, {
      toValue: 2250,
      duration: 300,
    }).start(() => {
      Animated.spring(this.state.animation, {
        duration: 300,
        toValue: -2000,
      }).start();
    });
  };

  goBack = () => {
    this.props.actions.showProductDetail(false);
  };

  addToCart = (product) => {
    this.props.actions.addToCart({quantity: 1, product});
    this.showModal();
  };

  render() {
    const animatedStyles = {
      transform: [
        {
          translateY: this.state.animation,
        },
      ],
    };
    return (
      <Modal visible={this.props.showProductDetail} animationType="slide">
        <View style={styles.container}>
          <Header leftButtonIcon="x" leftButtonPress={() => this.goBack()} />
          <ScrollView>
            <Image
              style={styles.img}
              source={{uri: this.props.selectProduct.img}}
            />
            <View style={styles.header}>
              <Text style={styles.productName}>
                {this.props.selectProduct.name}
              </Text>
              <Text style={styles.productPrice}>
                ${this.props.selectProduct.price}
              </Text>
            </View>
            <Text style={styles.category}>
              {this.props.selectProduct.category}
            </Text>
            <Text style={styles.title}>SIZE</Text>
            <SizesContainer sizes={this.props.selectProduct.sizes} />
            <Text style={styles.title}>DESCRIPTION</Text>
            <Text style={styles.description}>
              {this.props.selectProduct.description}
            </Text>
          </ScrollView>
          <Animated.View style={[styles.alertContainer, animatedStyles]}>
            <Alert title={this.props.selectProduct.name + ' added to cart.'} />
          </Animated.View>
          <View style={styles.footerContainer}>
            <Button
              onPress={() => this.addToCart(this.props.selectProduct)}
              title="Add To Cart"
            />
          </View>
        </View>
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectProduct: state.selectProductReducer,
    showProductDetail: state.showProductDetailReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
      showProductDetail: bindActionCreators(
        productsActions.showProductDetail,
        dispatch,
      ),
    },
  };
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  img: {
    width: '100%',
    height: 200,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  productName: {
    fontWeight: '800',
    fontSize: 20,
    fontFamily: 'Dosis-Regular',
  },
  productPrice: {
    fontSize: 20,
    fontFamily: 'Dosis-Regular',
  },
  category: {
    marginHorizontal: 15,
    fontFamily: 'Dosis-Regular',
  },
  title: {
    marginHorizontal: 15,
    marginVertical: 30,
    fontFamily: 'Dosis-Bold',
  },
  description: {
    marginHorizontal: 15,
    fontFamily: 'Dosis-Regular',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  alertContainer: {
    position: 'absolute',
    top: -2000,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    zIndex: 2,
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductDetailScreen);
