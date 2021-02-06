import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import SearchProductContainer from '../../components/SearchProductContaner';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productsActions from '../../redux/actions/products';

class SearchScreen extends Component {
  state = {
    productName: '',
  };

  showProductDetail = (item) => {
    this.props.actions.selectProduct(item);
    this.props.actions.showProductDetail(true);
  };

  renderItem = (item) => {
    return (
      <SearchProductContainer
        img={item.img}
        name={item.name}
        price={item.price}
        onPress={() => this.showProductDetail(item)}
      />
    );
  };

  handleChangeText = (productName) => {
    this.setState({productName});
  };

  filterByInput = () => {
    let text = this.state.productName.toLowerCase();
    const newArray = [];
    this.props.products.map((x) => {
      if (x.name.toLowerCase().match(text)) {
        newArray.push(x);
      }
    });
    return newArray;
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            onChangeText={(value) => this.handleChangeText(value)}
            style={styles.searchInput}
            placeholder="Search product by name"
          />
          <Icon name="search" size={20} />
        </View>
        <Text style={styles.title}>Recommended Product</Text>
        <FlatList
          data={this.filterByInput()}
          keyExtractor={(item) => item.id}
          renderItem={(item) => this.renderItem(item.item)}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 15,
  },
  searchInput: {
    width: '90%',
  },
  title: {
    margin: 15,
    fontFamily: 'Dosis-Bold',
    fontSize: 18,
  },
});

function mapStateToProps(state) {
  return {
    products: state.productsListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      showProductDetail: bindActionCreators(
        productsActions.showProductDetail,
        dispatch,
      ),
      selectProduct: bindActionCreators(
        productsActions.selectProduct,
        dispatch,
      ),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
