import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

class ProductContainer extends Component {
    render(){
        return(
            <TouchableOpacity 
                onPress={this.props.onPress} 
                style={styles.container} 
                activeOpacity={0.8}>
                <Image style={styles.img} resizeMode='stretch' source={{uri: this.props.productImg}} />
                <Text style={styles.productName}>{this.props.productName}</Text>
                <Text style={styles.productPrice}>${this.props.productPrice}</Text>
                <TouchableOpacity style={styles.heartButton}>
                    <Icon name='heart' size={18} color='gray'/>
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15
    },
    img: {
        width: '100%',
        height: 190
    },
    productName: {
        margin: 5,
        fontFamily: 'Dosis-regular',
        fontSize: 16
    },
    productPrice: {
        marginVertical: 2,
        marginHorizontal: 5,
        fontWeight: '300',
        fontFamily: 'Dosis-Regular',
        fontSize: 17
    },
    heartButton: {
        position: 'absolute',
        right: 5,
        top: 5
    }
});

export default ProductContainer;