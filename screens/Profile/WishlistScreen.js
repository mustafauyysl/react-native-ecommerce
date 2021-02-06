import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import {connect} from 'react-redux';
import WishlistContainer from '../../components/WishlistContainer';
import {bindActionCreators} from 'redux';
import * as wishlistActions from '../../redux/actions/wishlist';
import Icon from 'react-native-vector-icons/Feather';

Icon.loadFont();

class WislistReducer extends Component {
  renderItem = (item) => {
    return (
      <WishlistContainer
        name={item.name}
        price={item.price}
        img={item.img}
        dislikePress={() => this.props.actions.removeFromWishlist(item)}
      />
    );
  };

  renderEmpty = () => {
    return (
      <View style={styles.emptyContainer}>
        <Icon name="heart" size={70} color="gray" />
        <Text style={styles.emptyTitle}>Empty wishlist</Text>
        <Text style={styles.emptyText}>There is no item in wishlist</Text>
      </View>
    );
  };

  renderWishlist = () => {
    return (
      <FlatList
        style={{height: '100%'}}
        data={this.props.wishlist}
        keyExtractor={(item) => item.id}
        renderItem={(item) => this.renderItem(item.item)}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          leftButtonIcon="chevron-left"
          leftButtonPress={() => this.props.navigation.goBack()}
          title="WishList"
        />
        {this.props.wishlist.length > 0
          ? this.renderWishlist()
          : this.renderEmpty()}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    wishlist: state.wishlistReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromWishlist: bindActionCreators(
        wishlistActions.removeFromWishlist,
        dispatch,
      ),
    },
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  emptyTitle: {
    fontFamily: 'Dosis-Bold',
    fontSize: 20,
    marginVertical: 15,
  },
  emptyText: {
    fontFamily: 'Dosis',
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(WislistReducer);
