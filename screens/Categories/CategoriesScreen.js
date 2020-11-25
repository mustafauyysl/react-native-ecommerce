import React,{Component} from 'react';
import { View, Text } from 'react-native';
import CategoryContainer from '../../components/CategoryContainer';
import Header from '../../components/Header';

class CategoriesScreen extends Component{
    render(){
        return(
            <View>
                <Header title='Categories' />
                <CategoryContainer />
            </View>
        )
    }
}
export default CategoriesScreen;