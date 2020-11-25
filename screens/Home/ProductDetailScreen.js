import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Animated } from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from '../../redux/actions/cart';
import Header from '../../components/Header';
import Button from '../../components/Button';
import SizesContainer from '../../components/SizesContainer';
import Alert from '../../components/Alert';

class ProductDetailScreen extends Component{
    state = {
		animation: new Animated.Value(0)
    };

    showModal = () => {
		Animated
			.spring(this.state.animation, {
				toValue: 400,
				duration: 300
            })
            .start(() => {
                Animated
                    .spring(this.state.animation, {
                        duration: 300,
                        toValue: -200
                    })
                .start()
            })
    };


    goBack = () => {
        this.props.navigation.goBack();
        this.props.navigation.dangerouslyGetParent().setOptions({  tabBarVisible: true })
    }       

    addToCart = (product) => {
        this.props.actions.addToCart({ quantity: 1, product });
        this.showModal();
        
    }
    
    render(){
        const animatedStyles = {
			transform: [
				{
					translateY: this.state.animation
				}
			]
		};
        return(
            <View style={styles.container}>
                <Header 
                   leftButtonIcon='x'
                   leftButtonPress={() =>this.goBack()}
               /> 
                <ScrollView>
                    <Image style={styles.img} source={{uri:'https://cdn.dsmcdn.com//ty14/product/media/images/20201006/16/13767195/89613972/1/1_org.jpg'}} />
                    <View style={styles.header}>
                        <Text style={styles.productName}>{this.props.selectProduct.name}</Text>
                        <Text style={styles.productPrice}>${this.props.selectProduct.price}</Text>
                    </View>
                    <Text style={styles.category}>{this.props.selectProduct.category}</Text>
                    <Text style={styles.title}>SIZE</Text>
                    <SizesContainer sizes={this.props.selectProduct.sizes} />
                    <Text style={styles.title}>DESCRIPTION</Text>
                    <Text style={styles.description}>{this.props.selectProduct.description}</Text>

                </ScrollView>
                <Animated.View style={[styles.alertContainer,animatedStyles]}>
                    <Alert title={this.props.selectProduct.name+ ' sepete eklendi.'}/>
                </Animated.View>
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
        selectProduct: state.selectProductReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            addToCart: bindActionCreators(cartActions.addToCart,dispatch)
        }
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    img: {
        width: '100%',
        height: 200
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15
    },
    productName: {
        fontWeight: '800',
        fontSize: 20,
        fontFamily: 'Dosis-Regular'
    },
    productPrice: {
        fontSize: 20,
        fontFamily: 'Dosis-Regular'
    },
    category: {
        marginHorizontal: 15,
        fontFamily: 'Dosis-Regular'
    },
    title: {
        marginHorizontal: 15,
        marginVertical: 30,
        fontFamily: 'Dosis-Regular'
    },
    description: {
        marginHorizontal: 15,
        fontFamily: 'Dosis-Regular'
    },
    footerContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    alertContainer: {
        position: 'absolute',
        top: -200,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(ProductDetailScreen);