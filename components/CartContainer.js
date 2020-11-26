import React,{Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

class CartContainer extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Icon style={styles.minusIcon} name='minus-circle' size={18} color='#800000'/>
                <Image style={styles.img} source={{uri: this.props.img}}/>
                <View style={styles.description}>
                    <Text style={styles.name}>{this.props.name}</Text>
                    <Text style={styles.price}>${this.props.price}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Icon style={styles.icon} name='plus' size={16} />
                        <Text>{this.props.amount}</Text>
                    <Icon style={styles.icon} name='minus' size={16} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 15
    },
    icon: {
        marginVertical: 7
    },
    minusIcon: {
        marginRight: 10
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E9E9E9',
        padding: 5,
        borderRadius: 15,
        marginLeft: 20
    },
    description: {
        marginLeft: 15,
        alignSelf: 'flex-start',
        marginTop: 10
    },
    name: {
        fontFamily: 'Dosis-Regular'
    },
    price: {
        fontFamily: 'Dosis-Bold'
    }
});

export default CartContainer;