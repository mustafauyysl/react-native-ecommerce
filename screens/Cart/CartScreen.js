import React,{Component} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import CartContainer from '../../components/CartContainer';
import Header from '../../components/Header';
import Button from '../../components/Button';
import {connect} from 'react-redux';

class CartScreen extends Component{

    renderItem = (item) => {
        return (
            <CartContainer />
        )
    }

    render(){
        return(
            <View style={styles.container}>
                <Header 
                    title='Cart'
                    leftButtonIcon='chevron-left'
                    leftButtonPress={() => this.props.navigation.goBack()}
                />
                <FlatList 
                    keyExtractor={item => item.id}
                    data={this.props.cart}
                    renderItem={item => this.renderItem(item.item)}
                />
                <View style={styles.footerContainer}>
                    <Button 
                        onPress={() => this.addToCart(this.props.selectProduct)}
                        title='Sepete Ekle'
                    />
                </View>
            </View>
        )
    }
}

function mapStateToProps(state){
    return {
        cart: state.cartReducer
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    footerContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
})

export default connect(mapStateToProps)(CartScreen);