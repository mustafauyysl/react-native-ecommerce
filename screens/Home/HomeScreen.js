import React,{Component} from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import ProductContainer from '../../components/ProductContainer';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productsActions from '../../redux/actions/products';
import Header from '../../components/Header';
import Alert from '../../components/Alert';

class HomeScreen extends Component{
    constructor(props){
        super(props)
        showAlert = new Alert();
    }

    componentDidMount(){
        this.props.actions.getProducts();
    }

    showProductDetail = (item) => {
        this.props.actions.selectProduct(item);
        this.props.navigation.dangerouslyGetParent().setOptions({  tabBarVisible: false })
        this.props.navigation.navigate('ProductDetail')
    }

    renderItem = (item) => {
        return (
            <ProductContainer 
                productName={item.name}
                productPrice={item.price}
                productImg={item.img}
                onPress={() => this.showProductDetail(item)}
            />
        )
    }


    render(){
        return(
            <View style={styles.container}>
                <Header 
                    title='Mershka'
                    leftButtonIcon='align-left'
                    rightButtonIcon='shopping-cart'
                    rightButtonPress={() => this.props.navigation.navigate('Cart')}
                    cart={3}
                />
                <FlatList 
                    style={styles.list}
                    renderItem={(item) => this.renderItem(item.item)}
                    data={this.props.products}
                    numColumns={2}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%'
    },
    list: {
        width: '100%',
        height: '100%',
    }
});

function mapStateToProps(state){
    return {
        products: state.productsListReducer,
        showProductDetail: state.showProductDetailReducer,
        cart: state.cartReducer
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: {
            getProducts: bindActionCreators(productsActions.getProducts,dispatch),
            showProductDetail: bindActionCreators(productsActions.showProductDetail, dispatch),
            selectProduct: bindActionCreators(productsActions.selectProduct, dispatch)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);